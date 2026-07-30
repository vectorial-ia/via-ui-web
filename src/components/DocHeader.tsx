import React from "react";

interface DocHeaderProps {
  category?: string;
  title: string;
  description: string;
}

export function DocHeader({ category, title, description }: DocHeaderProps) {
  return (
    <div>
      {category && (
        <div className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mb-1">
          {category}
        </div>
      )}
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default DocHeader;
