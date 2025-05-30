import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  // This component provides a basic structure for the application.
  // It ensures that the content area takes up at least the full viewport height
  // and allows content to grow, which is useful for layouts that might include
  // fixed headers/footers or need to center content vertically on a page.

  // The `bg-background` and `text-foreground` are typically applied to the `body`
  // element globally (as seen in the provided src/index.css), so they are not repeated here.
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {/* 'main' tag is used for semantic correctness, representing the primary content of the body. */}
      {/* 'flex-1' allows this main area to expand and fill available vertical space. */}
      {/* 'flex flex-col' on main ensures that children of MainAppLayout 
          can correctly utilize flexbox for their own layout needs (e.g., vertical centering). */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
