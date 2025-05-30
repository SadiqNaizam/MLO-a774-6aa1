import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ className, onClick, children, disabled }) => {
  // Requirements: "Stylized button for the login action – bright blue background with white text."
  // This matches Shadcn's default Button variant (bg-primary, text-primary-foreground).
  // Colors from theme: primary (hsl(193 100% 43%)), primary-foreground (hsl(0 0% 100%)).
  // Shadcn Button is rounded-md by default, matching inputs and card rounding.
  return (
    <Button
      variant="default"
      className={cn("w-full", className)} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
