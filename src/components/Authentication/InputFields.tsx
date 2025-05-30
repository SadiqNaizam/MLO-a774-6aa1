import React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface InputFieldsProps {
  className?: string;
  username?: string;
  onUsernameChange?: (value: string) => void;
  password?: string;
  onPasswordChange?: (value: string) => void;
}

const InputFields: React.FC<InputFieldsProps> = ({
  className,
  username = '',
  onUsernameChange,
  password = '',
  onPasswordChange,
}) => {
  // Requirements: "Captures username and password – styled with outline and rounded corners."
  // Shadcn Input component handles outline (border) and uses theme's rounded-md by default.
  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <Input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => onUsernameChange?.(e.target.value)}
          className="rounded-md" // Explicitly ensure rounded-md as per PRD for inputs.
          autoComplete="username"
        />
      </div>
      <div>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onPasswordChange?.(e.target.value)}
          className="rounded-md" // Explicitly ensure rounded-md as per PRD for inputs.
          autoComplete="current-password"
        />
      </div>
    </div>
  );
};

export default InputFields;
