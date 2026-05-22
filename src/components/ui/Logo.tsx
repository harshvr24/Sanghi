import React from 'react';
import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-10 w-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500" />
        <div className="relative h-6 w-6 bg-primary rounded shadow-lg shadow-primary/20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
      <div>
        <div className="font-black text-xl leading-none tracking-tighter text-foreground group-hover:text-primary transition-colors">
          SANGHI
        </div>
        <div className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
          Pipes & Tubes
        </div>
      </div>
    </div>
  );
};
