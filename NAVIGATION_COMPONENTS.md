# Navigation Components

This project includes navigation components inspired by awwwards.com with global navigation available on all pages:

## Global Navigation

The navigation bar is now available on **all pages** of the website through the global layout. It automatically appears at the bottom center of every page and provides consistent navigation throughout the site.

### Features:
- **Global availability** - appears on all pages automatically
- **Scroll-aware behavior** - hides when scrolling down, reappears when scrolling up
- **Smart navigation** - scrolls to sections on the same page or navigates to different pages
- **Context-aware** - different navigation items for different pages
- **Smooth animations** - spring-based animations for natural feel

### How it works:
1. The `GlobalNavigation` component is included in the root layout (`app/layout.tsx`)
2. It automatically detects the current page and shows appropriate navigation items
3. On the main page, it scrolls to sections (Home, About, Projects, Services, Contact)
4. On demo pages, it shows relevant navigation items
5. The navigation is hidden on the TOC demo page to avoid conflicts

## Individual Components

## 1. ScrollAwareNavbar

A navigation bar that hides when scrolling down and reappears when scrolling up, positioned at the bottom center of the screen.

### Features:
- Scroll-aware visibility (hides on scroll down, shows on scroll up)
- Progress indicator showing scroll position
- Dropdown menu with navigation items
- Smooth animations and transitions
- Backdrop blur effects
- Configurable positioning

### Usage:

```tsx
import ScrollAwareNavbar, { NavItem } from "@/components/ui/scroll-aware-navbar";

const navItems: NavItem[] = [
  { name: "Home", value: "home" },
  { name: "About", value: "about" },
  { name: "Projects", value: "projects" },
  { name: "Contact", value: "contact" },
];

function MyComponent() {
  const [activeItem, setActiveItem] = useState<NavItem>(navItems[0]);

  return (
    <ScrollAwareNavbar
      items={navItems}
      activeItem={activeItem}
      onItemSelect={setActiveItem}
      position="bottom-center" // or "bottom-left", "bottom-right"
    />
  );
}
```

### Props:
- `items`: Array of navigation items
- `activeItem`: Currently selected item
- `onItemSelect`: Callback when an item is selected
- `position`: Position of the navbar ("bottom-center", "bottom-left", "bottom-right")
- `className`: Additional CSS classes

## 2. DynamicScrollIslandTOC

A table of contents component with scroll progress and dynamic content filtering.

### Features:
- Scroll progress indicator
- Expandable dropdown with navigation items
- Dynamic content filtering
- Smooth animations and transitions
- Layout animations using Framer Motion

### Usage:

```tsx
import DynamicScrollIslandTOC, { TOC_INTERFACE } from "@/components/ui/dynamic-scroll-island-toc";

const tocData: TOC_INTERFACE[] = [
  { name: "All" },
  { name: "Section 1", value: "section1" },
  { name: "Section 2", value: "section2" },
];

function MyComponent() {
  const [active, setActive] = useState(tocData[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <DynamicScrollIslandTOC
      data={tocData}
      value={active}
      setValue={setActive}
      ref={scrollRef}
    />
  );
}
```

## Demo Pages

### Main Page (`/`)
The main page now includes sections that the global navigation can scroll to:
- Home (hero section)
- About
- Projects  
- Services
- Contact

### Navbar Demo
Visit `/navbar-demo` to see the ScrollAwareNavbar in action with sample content.

### TOC Demo
Visit `/toc-demo` to see the DynamicScrollIslandTOC component with image filtering.

### Test Page
Visit `/test` to verify the global navigation works on all pages.

## Dependencies

The components require:
- `motion` (Framer Motion) for animations
- `react-icons` for icons
- `tailwind-merge` and `clsx` for class name utilities

## Installation

```bash
npm install motion react-icons
```

## Styling

The components use Tailwind CSS classes and are designed to work with the existing design system. They include:
- Backdrop blur effects
- Smooth transitions
- Responsive design
- Dark theme compatibility

## Customization

Both components are highly customizable through:
- CSS classes via the `className` prop
- Tailwind CSS custom properties
- Component props for behavior customization