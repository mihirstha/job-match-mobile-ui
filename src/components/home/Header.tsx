
import { Filter } from "lucide-react";

interface HeaderProps {
  onFilterClick: () => void;
}

const Header = ({ onFilterClick }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img 
          src="/lovable-uploads/7eff5569-5ee3-4e6a-9f7b-ff9e7644f1a1.png" 
          alt="Job Matchy Nepal Logo" 
          className="w-12 h-12 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold">Job Matchy Nepal</h1>
          <p className="text-muted-foreground">Find your perfect job match</p>
        </div>
      </div>
      <button 
        className="p-3 rounded-lg border border-border bg-background flex items-center justify-center"
        onClick={onFilterClick}
      >
        <Filter size={20} className="text-primary" />
      </button>
    </div>
  );
};

export default Header;
