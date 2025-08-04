"use client";

import { useState } from "react";
import ScrollAwareNavbar, { NavItem } from "@/components/ui/scroll-aware-navbar";

const navItems: NavItem[] = [
  { name: "Home", value: "home" },
  { name: "About", value: "about" },
  { name: "Projects", value: "projects" },
  { name: "Services", value: "services" },
  { name: "Contact", value: "contact" },
];

export default function NavbarDemo() {
  const [activeItem, setActiveItem] = useState<NavItem>(navItems[0]);

  const handleItemSelect = (item: NavItem) => {
    setActiveItem(item);
    // You can add navigation logic here
    console.log("Selected:", item.name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Scroll-Aware Navbar</h1>
          <p className="text-xl text-gray-300 mb-8">
            Similar to awwwards.com - hides when scrolling down, reappears when scrolling up
          </p>
          <p className="text-lg text-gray-400">
            Scroll down to see the navigation bar behavior
          </p>
        </div>
      </section>

      {/* Content Sections */}
      {navItems.slice(1).map((item, index) => (
        <section
          key={item.value}
          className="min-h-screen flex items-center justify-center text-white p-8"
          style={{
            background: `linear-gradient(135deg, hsl(${index * 60}, 70%, 20%), hsl(${(index + 1) * 60}, 70%, 30%))`
          }}
        >
          <div className="text-center max-w-4xl">
            <h2 className="text-5xl font-bold mb-6">{item.name}</h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              This is the {item.name.toLowerCase()} section. The navigation bar will hide when you scroll down 
              and reappear when you scroll up, just like on awwwards.com. The navbar is positioned at the 
              bottom center and includes a progress indicator that shows your scroll position.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold mb-2">Feature {i + 1}</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Scroll-Aware Navigation Bar */}
      <ScrollAwareNavbar
        items={navItems}
        activeItem={activeItem}
        onItemSelect={handleItemSelect}
        position="bottom-center"
      />
    </div>
  );
}