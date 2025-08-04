'use client';

import React from 'react';
import { ChromeGrid } from './chrome-grid';

interface BackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* ChromeGrid Background - Fixed positioning with low z-index */}
      <ChromeGrid />
      
      {/* Content Layer - Higher z-index to appear above background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};