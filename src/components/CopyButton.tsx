import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "via-ui";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button 
      onClick={handleCopy} 
      variant="secondary"
      size="sm"
      style={{
        height: "26px",
        padding: "4px 10px",
        borderRadius: "6px"
      }}
      title="Copiar código"
    >
      {copied ? (
        <>
          <Check size={12} className="text-green-500" />
          <span className="text-[10px] text-green-500">Copiado</span>
        </>
      ) : (
        <>
          <Copy size={12} />
          <span className="text-[10px]">Copiar</span>
        </>
      )}
    </Button>
  );
}

export default CopyButton;
