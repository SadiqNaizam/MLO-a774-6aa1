import React from 'react';
import { cn } from '@/lib/utils';
import { CardTitle } from '@/components/ui/card';

interface HeadingProps {
  className?: string;
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ className, title }) => {
  // Layout Requirements: header.layout "pb-4 text-heading"
  // "text-heading" is interpreted as large, bold, and using card-foreground color.
  // CardTitle provides semantic heading and base styling (text-2xl font-semibold).
  // Overriding to font-bold to match visual appearance from image.
  // The pb-4 is handled by the CardHeader in LoginForm.
  return (
    <CardTitle className={cn("text-2xl font-bold text-card-foreground", className)}>
      {title}
    </CardTitle>
  );
};

export default Heading;
