"use client";

import DynamicScrollIslandTocDemo from "@/components/ui/dynamic-scroll-island-toc/demo";

export default function TocDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto py-8">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-4">Dynamic Scroll Island TOC</h1>
          <p className="text-xl text-gray-300">
            A navigation component with scroll progress and dynamic content filtering
          </p>
        </div>
        
        <DynamicScrollIslandTocDemo />
      </div>
    </div>
  );
}