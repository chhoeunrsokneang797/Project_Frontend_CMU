import { StrictMode } from 'react'; // Imports StrictMode for development checks
import { createRoot } from 'react-dom/client'; // Imports createRoot for React 18+ rendering
import './index.css'; // Imports global CSS styles
import App from './App.tsx'; // Imports your main App component

/**
 * This is the entry point of your React application.
 * It initializes the React root and renders the main App component.
 */
createRoot(
  // Get the DOM element where the React app will be mounted.
  // The '!' asserts that the element will not be null, which is typical for 'root'.
  document.getElementById('root')!
).render(
  // StrictMode is a tool for highlighting potential problems in an application.
  // It helps with identifying unsafe lifecycles, legacy API usage, and other issues.
  <StrictMode>
    {/* The main application component that contains your UI and logic. */}
    <App />
  </StrictMode>,
);
