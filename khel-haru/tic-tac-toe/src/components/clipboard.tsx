import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@libs/components";
import { Check } from "lucide-react";
import { MouseEvent, ReactNode, useState } from "react";

interface ClipboardProps {
  content: string;
  icon: ReactNode;
}

export const Clipboard = ({ content, icon }: ClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isCopied) {
      event.stopPropagation();
      navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const iconToDisplay = isCopied ? <Check className="w-4 h-4 text-primary" /> : icon;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div onClick={handleOnClick} className="p-1">
            {iconToDisplay}
          </div>
        </TooltipTrigger>
        <TooltipContent>{isCopied ? "Copied" : "Copy"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
