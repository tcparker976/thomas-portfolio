# TechStack Components

This directory contains the modular components that make up the TechStack section.

## Components

### TechStack.jsx
The main component that orchestrates all the sub-components. This is the entry point for the tech stack section.

### TechHeader.jsx
Handles the header section including:
- Main title
- Subtitle with instructions
- Screen reader accessibility text

**Props:**
- `title` (string): The main heading text
- `subtitle` (string): The subtitle/instruction text

### TechPanels.jsx
Container component that renders all technology category panels.

**Props:**
- `categories` (object): Object containing all technology categories from tech content

### TechPanel.jsx
Individual panel component for each technology category.

**Props:**
- `categoryKey` (string): Unique identifier for the category
- `category` (object): Category data including title, size, and tools
- `index` (number): Panel index for accessibility

### TechFooter.jsx
Handles the footer section with closing message.

**Props:**
- `message` (string): The footer message text

## Usage

```jsx
import TechStack from './TechStack';

// The main component handles all the data and sub-components
<TechStack />
```

## Benefits of Modular Structure

1. **Maintainability**: Each component has a single responsibility
2. **Reusability**: Components can be reused or tested independently
3. **Readability**: Smaller, focused components are easier to understand
4. **Testing**: Each component can be unit tested in isolation
5. **Flexibility**: Easy to modify or extend individual parts without affecting others 