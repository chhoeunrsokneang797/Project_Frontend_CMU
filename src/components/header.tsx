import { useCallback, useState } from "react";
import NavigationHeader from "./navigation-header";

export default function Header() { 
  const [currentPath, setCurrentPath] = useState("/");
  const onNavigate = useCallback((path: string) => {
    setCurrentPath(path);
    console.log(`Navigating to: ${path}`);
  }, []);

  return (
    <header className="shadow-md bg-gray-700 z-50">
      <NavigationHeader currentPath={currentPath} onNavigate={onNavigate} />
      <hr className="text-gray-300" />
      {/* <NavigationLink /> */}
    </header>
  );
}
