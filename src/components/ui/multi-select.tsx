
import { useState } from "react";
import { X } from "lucide-react";

interface MultiSelectProps {
  options: string[];
  selectedValues: string[];
  onChange: (selected: string[]) => void;
  minSelected?: number;
  maxSelected?: number;
  label: string;
  placeholder?: string;
  allowCustom?: boolean;
}

export const MultiSelect = ({
  options,
  selectedValues,
  onChange,
  minSelected = 0,
  maxSelected = Infinity,
  label,
  placeholder = "Select options",
  allowCustom = false,
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const handleSelect = (value: string) => {
    if (selectedValues.includes(value)) {
      // Remove if already selected
      onChange(selectedValues.filter(item => item !== value));
    } else {
      // Add if not at max
      if (selectedValues.length < maxSelected) {
        onChange([...selectedValues, value]);
        setErrorMessage(null);
      } else {
        setErrorMessage(`You can select maximum ${maxSelected} options`);
      }
    }
  };
  
  const handleRemove = (value: string) => {
    if (selectedValues.length <= minSelected) {
      setErrorMessage(`You must select at least ${minSelected} options`);
      return;
    }
    onChange(selectedValues.filter(item => item !== value));
  };
  
  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddCustom = () => {
    if (!searchTerm.trim()) return;
    if (selectedValues.includes(searchTerm.trim())) {
      setErrorMessage("This option is already selected");
      return;
    }
    if (selectedValues.length < maxSelected) {
      onChange([...selectedValues, searchTerm.trim()]);
      setSearchTerm("");
      setErrorMessage(null);
    } else {
      setErrorMessage(`You can select maximum ${maxSelected} options`);
    }
  };
  
  return (
    <div className="relative w-full">
      <label className="text-sm font-medium block mb-1">{label}</label>
      
      <div 
        className="border border-border rounded-lg p-2 min-h-[42px] flex flex-wrap gap-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {selectedValues.length > 0 ? (
          selectedValues.map((value) => (
            <div 
              key={value} 
              className="bg-primary/10 text-primary text-sm px-2 py-1 rounded-full flex items-center"
            >
              {value}
              <button
                type="button"
                className="ml-1 text-primary hover:text-primary/80"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(value);
                }}
              >
                <X size={14} />
              </button>
            </div>
          ))
        ) : (
          <span className="text-gray-400 text-sm py-1">{placeholder}</span>
        )}
      </div>
      
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
      
      {minSelected > 0 && (
        <p className="text-gray-500 text-xs mt-1">
          Please select at least {minSelected} options
          {maxSelected < Infinity ? ` (maximum ${maxSelected})` : ''}
        </p>
      )}
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          
          <div className="absolute z-50 mt-1 w-full bg-white border border-border rounded-lg shadow-lg max-h-[300px] flex flex-col overflow-hidden">
            <div className="p-2 border-b">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full border border-border rounded px-3 py-1 text-sm"
                autoFocus
              />
            </div>
            
            <div className="overflow-y-auto flex-1">
              {filteredOptions.length > 0 ? (
                <div className="p-1">
                  {filteredOptions.map((option) => (
                    <div
                      key={option}
                      className={`px-3 py-2 text-sm cursor-pointer rounded ${
                        selectedValues.includes(option)
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 text-center text-sm text-gray-500">
                  {allowCustom 
                    ? "No matching options. Add as custom entry?"
                    : "No matching options."}
                </div>
              )}
            </div>
            
            {allowCustom && searchTerm.trim() && !options.includes(searchTerm.trim()) && (
              <div className="p-2 border-t">
                <button
                  type="button"
                  className="w-full py-2 text-sm bg-primary/10 text-primary rounded"
                  onClick={handleAddCustom}
                >
                  Add "{searchTerm.trim()}"
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
