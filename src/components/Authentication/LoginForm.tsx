import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import Heading from './Heading';
import InputFields from './InputFields';
import PrimaryButton from './PrimaryButton';
import SecondaryLink from './SecondaryLink';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleLogin = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);

    if (!username || !password) {
      setError("Username and password are required.");
      setIsLoading(false);
      return;
    }

    console.log("Login attempt with:", { username, password });
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Mock success/failure based on some dummy credentials
      if (username === "admin" && password === "password") {
        console.log("Login successful");
        // In a real app: redirect or update auth state
      } else {
        setError("Invalid username or password.");
      }
    } catch (apiError) {
      console.error("Login API error:", apiError);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [username, password]);

  const handleSignUp = React.useCallback(() => {
    console.log("Navigate to sign up page or open sign up modal");
    // Example: alert('Sign up clicked!');
  }, []);

  return (
    <Card className={cn("w-[320px] rounded-md shadow-md bg-card", className)}>
      <CardHeader className="p-6 pb-4">
        <Heading title="Log in" />
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="flex flex-col gap-4">
          <InputFields
            username={username}
            onUsernameChange={setUsername}
            password={password}
            onPasswordChange={setPassword}
          />
          {error && (
            <p className="text-sm text-destructive text-center">
              {error}
            </p>
          )}
          <PrimaryButton onClick={handleLogin} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log in'}
          </PrimaryButton>
          <SecondaryLink onClick={handleSignUp}>
            or, sign up
          </SecondaryLink>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
