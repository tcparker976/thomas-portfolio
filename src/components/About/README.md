# About Components

This directory contains the modular components that make up the About section.

## Components

### About.jsx
The main component that orchestrates all the sub-components. This is the entry point for the about section and handles the layout structure.

### ProfilePhoto.jsx
Displays the main profile photo with:
- Responsive sizing
- Circular border styling
- Accessibility attributes
- Optimized loading

### ProfessionalTagline.jsx
Shows the professional tagline section including:
- Main title/role
- Subtitle description
- Speech bubble styling
- Profile details (availability, location, timezone)

### SocialLinks.jsx
Contact/social media links component featuring:
- Interactive contact icons (email, LinkedIn, GitHub, etc.)
- Hover animations and effects
- Dark mode support
- Comic book-style visual effects

### QuickSkills.jsx
Quick skills overview component with:
- Skill badges
- Responsive layout
- Interactive hover states
- Categorized skill display

### AboutText.jsx
Main about text content component including:
- Detailed personal/professional description
- Multiple paragraphs with proper typography
- Responsive text sizing
- Accessibility features

## Layout Structure

The About section uses a two-column layout on desktop:

```
┌─────────────────────────────────────────┐
│                About                    │
├──────────────────┬──────────────────────┤
│  my-photo-       │                      │
│  container       │                      │
│  ┌─────────────┐ │                      │
│  │ProfilePhoto │ │                      │
│  └─────────────┘ │                      │
│  ┌─────────────┐ │     AboutText        │
│  │Tagline      │ │                      │
│  └─────────────┘ │                      │
│  ┌─────────────┐ │                      │
│  │SocialLinks  │ │                      │
│  └─────────────┘ │                      │
│  ┌─────────────┐ │                      │
│  │QuickSkills  │ │                      │
│  └─────────────┘ │                      │
└──────────────────┴──────────────────────┘
```

On mobile, it switches to a single-column layout.

## Usage

```jsx
import About from './About';

// The main component handles all the layout and sub-components
<About />

// Or import individual components
import { ProfilePhoto, SocialLinks, AboutText } from './About';
```

## Features

- **Responsive Design**: Adapts layout for mobile and desktop
- **Interactive Elements**: Hover effects, animations, and transitions
- **Dark Mode Support**: All components support theme switching
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation
- **Comic Book Theme**: Consistent visual styling throughout
- **Performance**: Optimized images and animations

## Benefits of Modular Structure

1. **Component Isolation**: Each component handles a specific part of the about section
2. **Maintainability**: Easy to update individual sections without affecting others
3. **Reusability**: Components can be used independently or rearranged
4. **Testing**: Each component can be unit tested in isolation
5. **Performance**: Better code splitting and lazy loading opportunities
6. **Flexibility**: Easy to modify layout or add/remove sections 