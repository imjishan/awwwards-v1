"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { TbChevronUp, TbX } from "react-icons/tb";

export interface NavItem {
  name: string;
  value?: string;
}

interface ScrollAwareNavbarProps {
  items: NavItem[];
  activeItem?: NavItem;
  onItemSelect?: (item: NavItem) => void;
  className?: string;
  position?: "bottom-center" | "bottom-left" | "bottom-right";
}

export default function ScrollAwareNavbar({
  items,
  activeItem,
  onItemSelect,
  className,
  position = "bottom-center",
}: ScrollAwareNavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to opacity for smooth transitions
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleItemSelect = (item: NavItem) => {
    onItemSelect?.(item);
    setIsOpen(false);
  };

  const positionClasses = {
    "bottom-center": "bottom-8 left-1/2 -translate-x-1/2",
    "bottom-left": "bottom-8 left-8",
    "bottom-right": "bottom-8 right-8",
  };

  return (
    <motion.div
      className={cn(
        "fixed z-50",
        positionClasses[position],
        className
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 100,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Main Navigation Bar */}
      <motion.div
        className={cn(
          "relative flex h-12 cursor-pointer items-center overflow-hidden rounded-full px-4",
          "min-w-[280px] bg-black/90 backdrop-blur-md border border-white/10",
          "text-white/90 shadow-2xl"
        )}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Progress Circle */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="8"
                className="stroke-white/20"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="12"
                cy="12"
                r="8"
                className="stroke-white/80"
                strokeWidth="2"
                fill="none"
                strokeDasharray={2 * Math.PI * 8}
                strokeDashoffset={useTransform(scrollYProgress, [0, 1], [2 * Math.PI * 8, 0])}
                strokeLinecap="round"
                transform="rotate(-90 12 12)"
              />
            </svg>
          </div>
          
          {/* Active Item Text */}
          <span className="font-medium text-sm">
            {activeItem?.name || "Navigation"}
          </span>
        </div>

        {/* Chevron Icon */}
        <motion.div
          className="ml-auto"
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.2 }}
        >
          <TbChevronUp size={16} />
        </motion.div>
      </motion.div>

      {/* Dropdown Menu */}
      <motion.div
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 10,
          scale: isOpen ? 1 : 0.95,
        }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="bg-black/95 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl min-w-[200px]">
          <div className="space-y-2">
            {items.map((item) => (
              <button
                key={item.name}
                onClick={() => handleItemSelect(item)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  "hover:bg-white/10 active:bg-white/20",
                  activeItem?.name === item.name
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.div>
  );
}