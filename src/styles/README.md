# CSS Architecture Documentation

## Overview

This directory contains the reorganized CSS structure for the Thomas Portfolio website. The CSS has been modularized for better maintainability, scalability, and developer experience.

## Directory Structure

```
src/styles/
├── globals/           # Global foundational styles
│   ├── reset.css     # CSS reset and base element styles
│   ├── variables.css # CSS custom properties and theme definitions
│   └── fonts.css     # Font declarations and typography
├── components/        # Component-specific styles
│   ├── Navbar.css    # Navigation bar styles
│   ├── About.css     # About section styles
│   ├── TechStack.css # Tech stack section styles
│   ├── Projects.css  # Projects section styles
│   ├── Contact.css   # Contact section styles
│   ├── ThemeToggle.css # Theme toggle component styles
│   └── ErrorBoundary.css # Error boundary component styles
├── utils/            # Utility and helper styles
│   ├── animations.css # Keyframe animations and motion preferences
│   ├── accessibility.css # Accessibility enhancements
│   └── responsive.css # Responsive utilities and breakpoint helpers
└── main.css          # Main entry point that imports all modules
```

## Import Order

The `main.css` file imports styles in this specific order:

1. **Global Styles** (Foundation)
   - Reset styles
   - CSS variables and themes
   - Font declarations and typography

2. **Component Styles**
   - Individual component stylesheets

3. **Utility Styles**
   - Animations and motion preferences
   - Accessibility enhancements
   - Responsive utilities

## Key Improvements

### 1. **Modular Architecture**
- Each component has its own CSS file
- Easier to locate and modify specific styles
- Better code organization and maintainability

### 2. **Eliminated Duplication**
- Removed massive duplication between desktop and mobile stylesheets
- Consolidated common styles into reusable modules

### 3. **Better Separation of Concerns**
- Global styles separated from component styles
- Utilities separated from component logic
- Clear distinction between foundation and feature styles

### 4. **Enhanced Maintainability**
- Smaller, focused files are easier to work with
- Changes to one component don't affect others
- Clear dependency chain through imports

### 5. **Improved Performance**
- CSS is still bundled into a single file by Vite
- Better caching potential for individual modules
- Easier to identify unused styles

## CSS Custom Properties (Variables)

All CSS variables are centralized in `globals/variables.css`:

```css
:root {
  /* Layout */
  --bubble-border: 25px;
  --mobile-border: 18px;
  
  /* Typography */
  --main-font: 'komika_textbold', Arial, Helvetica, sans-serif;
  --accent-font: 'komika_axisregular', Arial, Helvetica, sans-serif;
  
  /* Colors (Light Theme) */
  --text-color: #000000;
  --bg-color: #F8F9FA;
  --card-bg: #FFFFFF;
  /* ... more variables */
}

/* Dark theme overrides */
[data-theme="dark"] {
  --text-color: #ffffff;
  --bg-color: #1a1a2e;
  /* ... dark theme variables */
}
```

## Responsive Utilities

The `utils/responsive.css` file provides a comprehensive set of utility classes:

```css
/* Responsive spacing */
.p-sm, .p-md, .p-lg, .p-xl, .p-2xl
.px-sm, .py-md, .mx-auto, .my-lg

/* Responsive typography */
.text-xs, .text-sm, .text-base, .text-lg, .text-xl
.text-center, .text-left-mobile

/* Responsive display */
.hidden, .block, .flex, .grid
.hidden-mobile, .flex-tablet, .grid-desktop

/* Responsive layout */
.container, .container-narrow, .container-wide
.grid-cols-1, .grid-auto-fit, .gap-md
.flex-col, .justify-center, .items-center

/* Touch-friendly utilities */
.touch-target, .touch-lg, .touch-xl
```

## Component CSS Structure

Each component CSS file follows this structure:

```css
/* ===== Component Name ===== */
.component-container {
  /* Main container styles */
}

/* ===== Sub-components ===== */
.component-element {
  /* Element-specific styles */
}

/* ===== States and Interactions ===== */
.component:hover,
.component:focus {
  /* Interactive states */
}

/* ===== Mobile Styles ===== */
@media (max-width: 600px) {
  .component {
    /* Mobile-specific overrides */
  }
}

/* ===== Dark Mode Overrides ===== */
[data-theme="dark"] .component {
  /* Dark theme specific styles */
}
```

## Responsive Design

- **Mobile-first approach** with `@media (max-width: 600px)` breakpoint
- **Responsive units** using `vw` for scalability and `clamp()` for fluid typography
- **Accessibility considerations** with `clamp()` for minimum/maximum sizes
- **Touch device optimizations** via `@media (hover: none) and (pointer: coarse)`

## Accessibility Features

- **High contrast mode support** via `@media (prefers-contrast: high)`
- **Reduced motion preferences** via `@media (prefers-reduced-motion: reduce)`
- **Touch device optimizations** via `@media (hover: none) and (pointer: coarse)`
- **Focus management** with proper focus indicators
- **Screen reader support** with `.sr-only` utilities

## Migration Status

### ✅ Completed
- [x] CSS reset and base styles
- [x] CSS variables and theme system
- [x] Font declarations
- [x] Navbar component styles
- [x] About section styles
- [x] TechStack component styles
- [x] Projects component styles
- [x] Contact component styles
- [x] ThemeToggle component styles
- [x] ErrorBoundary component styles
- [x] Animation utilities
- [x] Accessibility utilities
- [x] Responsive utilities

### 🚧 TODO
- [ ] Remove old stylesheet files

## Usage

To use the new CSS structure:

1. **Import the main stylesheet** in your App component:
   ```jsx
   import './styles/main.css';
   ```

2. **Add new component styles** by creating a new file in `components/`:
   ```css
   /* src/styles/components/NewComponent.css */
   .new-component {
     /* styles */
   }
   ```

3. **Import the new component** in `main.css`:
   ```css
   @import './components/NewComponent.css';
   ```

4. **Use responsive utilities** for quick styling:
   ```html
   <div class="container flex flex-col-mobile items-center gap-md p-lg">
     <h1 class="text-3xl text-center-mobile">Title</h1>
     <p class="text-base max-w-2xl">Content</p>
   </div>
   ```

## Best Practices

1. **Use CSS variables** for colors, spacing, and typography
2. **Follow the established naming conventions** (kebab-case)
3. **Include mobile styles** in the same file as desktop styles
4. **Add dark mode support** for new components
5. **Consider accessibility** in all new styles
6. **Test with reduced motion preferences**
7. **Use responsive utilities** for common patterns
8. **Leverage clamp()** for fluid, responsive values

## Performance Considerations

- CSS is bundled by Vite for production
- Individual modules enable better development experience
- Unused styles can be more easily identified and removed
- Better caching potential for individual components
- Responsive utilities reduce custom CSS needed
- Clamp() functions provide efficient responsive scaling

## Migration Benefits

**Before:** 144KB across 2 monolithic files with massive duplication
**After:** Organized modular files with eliminated duplication and enhanced features

- **Maintainability**: ⬆️ Significantly improved
- **Developer Experience**: ⬆️ Much better organization
- **Performance**: ⬆️ Better caching and bundling
- **Accessibility**: ⬆️ Enhanced with dedicated utilities
- **Responsiveness**: ⬆️ Comprehensive utility system
- **Scalability**: ⬆️ Easy to add new components 

## Comic Book Dot Pattern System

### Overview
The portfolio uses a standardized comic book dot pattern system to create visual texture and maintain design consistency across all major components. These patterns are implemented as utility classes in `src/styles/utils/responsive.css`.

### Available Patterns

#### `.comic-dots-subtle`
- **Opacity**: 4% (light mode), 5% (dark mode)
- **Size**: 16px × 20px grid
- **Usage**: Main containers (TechStack, About sections)
- **Purpose**: Subtle background texture without overwhelming content

#### `.comic-dots-medium`
- **Opacity**: 6% (light mode), 8% (dark mode)  
- **Size**: 16px × 20px grid
- **Usage**: Emphasis areas requiring slightly more visible texture
- **Purpose**: Medium-level visual hierarchy

#### `.comic-dots-strong`
- **Opacity**: 10% (light mode), 2% white dots (dark mode)
- **Size**: 8px × 12px grid (smaller, denser pattern)
- **Usage**: High-emphasis areas or special sections
- **Purpose**: Strong visual texture for important content

#### `.comic-dots-large`
- **Opacity**: 3% (light mode), 2% white dots (dark mode)
- **Size**: 20px × 30px grid (larger, more spaced)
- **Usage**: Project cards and content areas
- **Purpose**: Larger pattern for spacious layouts

#### `.comic-dots-error`
- **Colors**: Red-tinted dots (rgba(255,68,68) / rgba(255,102,102))
- **Size**: 30px × 50px grid
- **Opacity**: 30% overall
- **Usage**: Error boundaries and error states
- **Purpose**: Visual indication of error states

### Implementation

#### Current Usage
- **TechStack**: `.comic-dots-subtle` on `.tech-container`
- **About**: `.comic-dots-subtle` on `.about-text-container`  
- **Projects**: `.comic-dots-subtle` on `.project-card`
- **ErrorBoundary**: `.comic-dots-error` on `.error-boundary`

#### How to Apply
Simply add the utility class to any positioned container:

```jsx
<div className="my-container comic-dots-subtle">
  {/* Content */}
</div>
```

**Requirements:**
- Container must have `position: relative`
- Pattern appears as `::before` pseudo-element
- Automatically inherits container's `border-radius`

### Design Principles

#### Visual Hierarchy
- **Subtle**: Background texture, doesn't compete with content
- **Medium**: Moderate emphasis, draws attention without distraction  
- **Strong**: High emphasis, used sparingly for important areas
- **Large**: Spacious feel, good for content-heavy sections
- **Error**: Clear visual indication of problems

#### Accessibility
- All patterns respect `prefers-reduced-motion`
- Opacity levels ensure sufficient contrast
- Dark mode variants optimize for readability

#### Performance
- CSS-only implementation (no images)
- Minimal DOM impact (single pseudo-element)
- Hardware-accelerated when possible

### Migration Notes

The dot pattern system replaced individual `::before` rules in:
- `TechStack.css` - removed `.tech-container::before`
- `About.css` - removed `.about-text-container::before`
- `Projects.css` - removed `.project-card::before`  
- `ErrorBoundary.css` - removed `.error-boundary::before`

This standardization provides:
- ✅ Consistent visual language
- ✅ Easier maintenance
- ✅ Better design system coherence
- ✅ Simplified component styles

### Future Considerations

Consider adding:
- `.comic-dots-accent` for brand color variations
- `.comic-dots-animated` for subtle motion effects
- Size variants for different screen sizes
- Custom color theming support 

## CSS Architecture

This directory contains the modular CSS architecture for the Thomas Portfolio, organized by component and utility type.

### Directory Structure

```
src/styles/
├── globals/           # Foundation styles
│   ├── reset.css     # CSS reset and base styles
│   ├── variables.css # CSS custom properties
│   └── fonts.css     # Font declarations and typography
├── components/        # Component-specific styles
│   ├── Navbar.css    # Navigation component
│   ├── About.css     # About section
│   ├── TechStack.css # Tech stack section
│   ├── Projects.css  # Projects section
│   ├── Contact.css   # Contact section
│   ├── ThemeToggle.css # Theme toggle component
│   └── ErrorBoundary.css # Error boundary component
├── utils/            # Utility and helper styles
│   ├── animations.css    # Global animations
│   ├── accessibility.css # Accessibility features
│   └── responsive.css    # Responsive utilities
└── main.css          # Main entry point
```

### Responsive Design Strategy

The portfolio uses a mobile-first responsive design approach with specific optimizations for different device categories:

#### Breakpoints
- **Mobile**: `max-width: 600px`
- **Tablet**: `max-width: 768px` and `min-width: 601px`
- **iPad Mini**: `min-width: 768px` and `max-width: 1024px`
- **Desktop**: `min-width: 1025px`

#### iPad Mini Optimizations

The portfolio includes comprehensive iPad Mini specific optimizations to ensure excellent user experience on iPad Mini devices (768px x 1024px portrait, 1024px x 768px landscape).

**Key iPad Mini Features:**

1. **Responsive Grid Layouts**
   - TechStack: 3-column grid (general) → 2-column (portrait) → 4-column (landscape)
   - Projects: Optimized card layouts with proper spacing
   - Contact: Auto-fit grid with 280px minimum column width

2. **Touch-Optimized Interactions**
   - Minimum 48px touch targets for all interactive elements
   - Enhanced hover states with proper visual feedback
   - Optimized button and link sizing

3. **Typography Scaling**
   - Fluid typography using clamp() functions
   - Optimized font sizes for iPad Mini screen density
   - Proper line heights and letter spacing

4. **Component-Specific Optimizations**
   - **Navbar**: Adjusted spacing, touch targets, and dropdown sizing
   - **About**: Flexible grid layout adapting to orientation
   - **TechStack**: Optimized panel grid and tooltip positioning
   - **Projects**: Enhanced navigation and content layout
   - **Contact**: Proper method card sizing and spacing
   - **ThemeToggle**: Positioned and sized for iPad Mini

5. **Orientation Support**
   - Portrait-specific layouts for narrow screens
   - Landscape-specific layouts maximizing horizontal space
   - Smooth transitions between orientations

6. **Safe Area Support**
   - CSS env() variables for devices with notches
   - Proper padding for curved edges
   - RTL language support

**iPad Mini Media Queries:**

```css
/* General iPad Mini */
@media (min-width: 768px) and (max-width: 1024px) { }

/* iPad Mini Portrait */
@media (width: 768px) and (height: 1024px) and (orientation: portrait) { }

/* iPad Mini Landscape */
@media (width: 1024px) and (height: 768px) and (orientation: landscape) { }
```

### Component Guidelines

Each component follows these principles:

1. **Modular**: Self-contained with minimal dependencies
2. **Responsive**: Mobile-first with progressive enhancement
3. **Accessible**: WCAG 2.1 AA compliant
4. **Performant**: Optimized animations and transitions
5. **Themeable**: Dark/light mode support

### Usage Guidelines

#### Importing Styles
```javascript
// In your main App component
import './styles/main.css';
```

#### Using Utility Classes
```jsx
// Responsive containers
<div className="container">...</div>
<div className="container-narrow">...</div>

// iPad Mini specific utilities
<div className="grid-cols-ipad-3">...</div>
<button className="touch-lg">...</button>
```

#### Custom Properties
```css
/* Using theme variables */
.my-component {
  background: var(--card-bg);
  color: var(--text-color);
  border: var(--border-width) solid var(--card-border);
  border-radius: var(--border-radius);
}

/* Using responsive spacing */
.my-element {
  padding: var(--spacing-md);
  margin: var(--spacing-lg);
}
```

### Best Practices

1. **Use CSS Custom Properties** for consistent theming
2. **Follow BEM Methodology** for class naming
3. **Implement Progressive Enhancement** for animations
4. **Test Across Devices** especially iPad Mini and mobile
5. **Optimize for Performance** with efficient selectors
6. **Maintain Accessibility** with proper focus states

### Migration Status

✅ **Completed Components:**
- Navbar (with iPad Mini optimizations)
- About (with iPad Mini optimizations)
- TechStack (with iPad Mini optimizations)
- Projects (with iPad Mini optimizations)
- Contact (with iPad Mini optimizations)
- ThemeToggle (with iPad Mini optimizations)
- ErrorBoundary (with iPad Mini optimizations)

✅ **Completed Utilities:**
- Responsive utilities (with iPad Mini support)
- Animations
- Accessibility features

### Performance Considerations

- **CSS Custom Properties**: Efficient theme switching
- **Modular Loading**: Components load only needed styles
- **Optimized Animations**: GPU-accelerated transforms
- **Reduced Motion**: Respects user preferences
- **Critical CSS**: Main styles loaded first

### Browser Support

- **Modern Browsers**: Full feature support
- **Safari**: Optimized for iOS devices including iPad Mini
- **Chrome/Firefox**: Full compatibility
- **Legacy Support**: Graceful degradation

### Development Workflow

1. **Component Development**: Create styles in respective component files
2. **Utility Creation**: Add reusable utilities to utils directory
3. **Testing**: Test across breakpoints including iPad Mini
4. **Documentation**: Update README with changes
5. **Performance**: Audit and optimize as needed

For questions or contributions, please refer to the main project documentation. 