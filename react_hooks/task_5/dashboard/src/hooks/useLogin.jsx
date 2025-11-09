// src/hooks/useLogin.jsx
import { useState, useEffect } from 'react';

export default function useLogin(onLogin) {
  // State for email, password, and form validation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  // Input change handlers
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Validation: email format + password length
  useEffect(() => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= 8;
    setEnableSubmit(isValidEmail && isValidPassword);
  }, [email, password]);

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // Only call callback if valid and provided
    if (enableSubmit && typeof onLogin === 'function') {
      onLogin(email, password);
    }
  };

  // Return everything the Login component needs
  return {
    email,
    password,
    enableSubmit,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}
