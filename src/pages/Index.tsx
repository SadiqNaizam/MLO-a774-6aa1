import React from 'react';
import LoginForm from '../components/Authentication/LoginForm';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * LoginPage
 * 
 * This component renders the main login page for the application.
 * It utilizes the `MainAppLayout` for basic page structure and centers the 
 * `LoginForm` component on the screen.
 *
 * The layout requirements specify a full-screen background with a centrally 
 * positioned login card. This is achieved by:
 * 1. `MainAppLayout`: Provides a `min-h-screen` container and a `flex-1` main content area.
 *    The `bg-background` color is applied globally to the `body` via `src/index.css`.
 * 2. Inner `div`: This wrapper uses `flex-1` to take up available vertical space within 
 *    `MainAppLayout`'s main content area, and `flex justify-center items-center` to 
 *    center the `LoginForm` both horizontally and vertically.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex-1 flex justify-center items-center">
        <LoginForm />
      </div>
    </MainAppLayout>
  );
};

export default LoginPage;
