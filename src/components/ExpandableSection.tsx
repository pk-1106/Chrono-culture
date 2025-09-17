import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const ExpandableSection = ({ 
  title, 
  description, 
  children, 
  defaultExpanded = false, 
  icon, 
  className 
}: ExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleExpanded();
    }
  };

  return (
    <Card className={cn("bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-heritage-gold/30 transition-heritage", className)}>
      <CardHeader className="pb-2">
        <div 
          className="flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-heritage-saffron rounded-lg p-2 -m-2"
          onClick={toggleExpanded}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-expanded={isExpanded}
          aria-controls={`section-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <div className="flex items-center gap-3">
            {icon && (
              <div className="text-heritage-saffron" aria-hidden="true">
                {icon}
              </div>
            )}
            <div>
              <CardTitle className="text-lg text-foreground hover:text-heritage-saffron transition-colors">
                {title}
              </CardTitle>
              {description && (
                <CardDescription className="text-muted-foreground text-sm mt-1">
                  {description}
                </CardDescription>
              )}
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-heritage-saffron transition-colors"
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Button>
        </div>
      </CardHeader>
      
      <div
        id={`section-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-none opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!isExpanded}
      >
        <CardContent className="pt-0">
          <div className="space-y-4">
            {children}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ExpandableSection;