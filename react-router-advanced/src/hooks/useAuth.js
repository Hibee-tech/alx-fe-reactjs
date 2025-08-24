import { useState } from "react";

// simple fake auth hook
export function useAuth() {
  // for demo, we'll keep this in state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // simulate login/logout
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
