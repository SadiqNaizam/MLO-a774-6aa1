import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SecondaryLinkProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({ className, onClick, children }) => {
  // Requirements: "Under-button link styled as secondary text for additional options (e.g., 'or, sign up')."
  // "secondary text" should use muted-foreground color (hsl(227 10% 63%)).
  // Shadcn Button's 'link' variant defaults to primary color and underline.
  // Override styles for custom appearance.
  return (
    <Button
      variant="link"
      className={cn(
        "text-muted-foreground hover:text-muted-foreground/80", // Use muted color, define hover
        "w-full", // Ensure full width for text centering within the button
        "p-0 h-auto", // Compact padding and height
        "text-sm", // Typical small font size for secondary links
        "no-underline hover:no-underline", // Remove underline shown in image
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SecondaryLink;
