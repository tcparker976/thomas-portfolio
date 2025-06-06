# Projects Components

This directory contains the modular components that make up the Projects section.

## Components

### Projects.jsx
The main component that orchestrates all the sub-components and handles the core logic including:
- State management for current project
- Mobile/desktop detection
- Navigation logic (next, previous, go to specific project)
- Video reference management

### ProjectCard.jsx
Individual project card component that displays:
- Project video/demo
- Project information and details
- Challenge/solution bubbles
- Tech stack badges
- Action buttons (Live Demo, View Code)

**Props:**
- `project` (object): Project data including title, description, tech stack, etc.
- `videoRef` (ref): Reference to the video element for playback control

### ProjectSlider.jsx
Mobile-optimized slider component with:
- Touch/swipe functionality
- Horizontal scrolling
- Progress indicators
- Responsive design for mobile devices

**Props:**
- `projects` (array): Array of all project data
- `currentProject` (number): Index of currently active project
- `onProjectChange` (function): Callback when project changes
- `videoRef` (ref): Reference to video element

### NavButton.jsx
Navigation button component for desktop view:
- Previous/Next arrow buttons
- CSS-only arrow styling
- Hover and focus states

**Props:**
- `direction` (string): Either "prev" or "next"
- `onClick` (function): Click handler for navigation

### ProjectDots.jsx
Dot indicator component for desktop view:
- Shows current project position
- Clickable dots for direct navigation
- Visual feedback for active state

**Props:**
- `currentProject` (number): Index of currently active project
- `onDotClick` (function): Callback when dot is clicked

## Usage

```jsx
import Projects from './Projects';

// The main component handles all the data and sub-components
<Projects />
```

## Features

- **Responsive Design**: Automatically switches between desktop navigation and mobile slider
- **Touch Support**: Mobile slider supports swipe gestures
- **Video Management**: Handles video loading and playback across project changes
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Performance**: Optimized for smooth transitions and interactions

## Benefits of Modular Structure

1. **Separation of Concerns**: Each component handles a specific part of the projects functionality
2. **Responsive Architecture**: Clean separation between mobile and desktop experiences
3. **Maintainability**: Easy to update individual components without affecting others
4. **Reusability**: Components can be used independently or in different contexts
5. **Testing**: Each component can be unit tested in isolation
6. **Performance**: Smaller components enable better code splitting and optimization 