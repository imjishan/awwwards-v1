"use client";

import { useState, useEffect } from "react";
import ScrollAwareNavbar, { NavItem } from "@/components/ui/scroll-aware-navbar";

// Default navigation items for all pages
const defaultNavItems: NavItem[] = [
  { name: "Home", value: "home" },
  { name: "About", value: "about" },
  { name: "Projects", value: "projects" },
  { name: "Services", value: "services" },
  { name: "Contact", value: "contact" },
];

// Navigation items for specific pages
const pageNavItems: Record<string, NavItem[]> = {
  "/": [
    { name: "Home", value: "home" },
    { name: "About", value: "about" },
    { name: "Projects", value: "projects" },
    { name: "Services", value: "services" },
    { name: "Contact", value: "contact" },
  ],
  "/navbar-demo": [
    { name: "Home", value: "home" },
    { name: "About", value: "about" },
    { name: "Projects", value: "projects" },
    { name: "Services", value: "services" },
    { name: "Contact", value: "contact" },
  ],
  "/toc-demo": [
    { name: "All", value: "all" },
    { name: "Grass", value: "grass" },
    { name: "Llama", value: "llama" },
    { name: "Cat", value: "cat" },
    { name: "Dog", value: "dog" },
  ],
};

export default function GlobalNavigation() {
  const [activeItem, setActiveItem] = useState<NavItem>(defaultNavItems[0]);
  const [currentPath, setCurrentPath] = useState<string>("/");
  const [navItems, setNavItems] = useState<NavItem[]>(defaultNavItems);

  useEffect(() => {
    // Get current path
    const path = window.location.pathname;
    setCurrentPath(path);

    // Set navigation items based on current page
    const items = pageNavItems[path] || defaultNavItems;
    setNavItems(items);
    setActiveItem(items[0]);

    // Handle navigation when items change
    const handleItemSelect = (item: NavItem) => {
      setActiveItem(item);
      
      // Add navigation logic here based on the item value
      switch (item.value) {
        case "home":
          if (path !== "/") window.location.href = "/";
          break;
        case "about":
          // Scroll to about section or navigate to about page
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
          break;
        case "projects":
          // Scroll to projects section or navigate to projects page
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }
          break;
        case "services":
          // Scroll to services section or navigate to services page
          const servicesSection = document.getElementById("services");
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
          }
          break;
        case "contact":
          // Scroll to contact section or navigate to contact page
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
          break;
        default:
          // For demo pages, just log the selection
          console.log("Selected:", item.name);
          break;
      }
    };

    // Store the handler for use in the component
    window.handleGlobalNavSelect = handleItemSelect;
  }, []);

  const handleItemSelect = (item: NavItem) => {
    setActiveItem(item);
    
    // Call the stored handler
    if (window.handleGlobalNavSelect) {
      window.handleGlobalNavSelect(item);
    }
  };

  // For demo pages, show a different navigation or hide it
  if (currentPath === "/toc-demo") {
    return null; // TOC demo has its own navigation
  }

  return (
    <ScrollAwareNavbar
      items={navItems}
      activeItem={activeItem}
      onItemSelect={handleItemSelect}
      position="bottom-center"
    />
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    handleGlobalNavSelect?: (item: NavItem) => void;
  }
}