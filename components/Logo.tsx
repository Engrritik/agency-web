import React from 'react';

export default function Logo() {
  return (
    <div className="w-5 h-5 flex items-end gap-[2px]">
      <div className="w-1 h-3 bg-foreground rounded-full"></div>
      <div className="w-1 h-5 bg-foreground rounded-full"></div>
      <div className="w-1 h-2 bg-foreground rounded-full"></div>
    </div>
  );
}
