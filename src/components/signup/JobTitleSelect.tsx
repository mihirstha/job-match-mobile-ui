
import { useState, useEffect, useRef } from "react";
import { Check, ChevronDown, X } from "lucide-react";

interface JobTitleSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const JobTitleSelect = ({
  value,
  onChange,
  placeholder = "Select job title"
}: JobTitleSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [customEntry, setCustomEntry] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const commonJobTitles = [
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Data Scientist",
    "UX/UI Designer",
    "Project Manager",
    "Product Manager",
    "Business Analyst",
    "Marketing Specialist",
    "Content Writer",
    "Graphic Designer",
    "Sales Representative",
    "Customer Support Specialist",
    "HR Manager",
    "Financial Analyst",
    "Accountant"
  ];
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const filteredTitles = commonJobTitles.filter(title =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSelect = (title: string) => {
    onChange(title);
    setSearchTerm("");
    setIsOpen(false);
    setCustomEntry(false);
  };
  
  const handleCustomSubmit = () => {
    if (searchTerm.trim()) {
      onChange(searchTerm.trim());
      setIsOpen(false);
      setCustomEntry(false);
    }
  };
  
  useEffect(() => {
    if (searchTerm && filteredTitles.length === 0) {
      setCustomEntry(true);
    } else {
      setCustomEntry(false);
    }
  }, [searchTerm, filteredTitles]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="input-field flex items-center cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {value ? (
          <span>{value}</span>
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
        <ChevronDown size={16} className="ml-auto" />
      </div>
      
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-border rounded-lg shadow-lg max-h-60 flex flex-col overflow-hidden">
          <div className="p-2 border-b">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search job titles or type new..."
              className="w-full border border-border rounded px-3 py-1.5 text-sm"
              autoFocus
            />
          </div>
          
          <div className="overflow-y-auto flex-1">
            {filteredTitles.length > 0 ? (
              <div className="p-1">
                {filteredTitles.map((title) => (
                  <div
                    key={title}
                    className="flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelect(title)}
                  >
                    <span className="flex-1">{title}</span>
                    {value === title && <Check size={16} className="text-primary" />}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 text-center text-sm text-gray-500">
                {searchTerm ? "No matching job titles found" : "No job titles available"}
              </div>
            )}
          </div>
          
          {customEntry && (
            <div className="p-2 border-t">
              <button
                type="button"
                className="w-full py-2 text-sm bg-primary/10 text-primary rounded flex items-center justify-center"
                onClick={handleCustomSubmit}
              >
                Add "{searchTerm.trim()}" as custom job title
              </button>
            </div>
          )}
        </div>
      )}
      
      {value && (
        <button
          type="button"
          className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          onClick={(e) => {
            e.stopPropagation();
            onChange("");
          }}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default JobTitleSelect;
