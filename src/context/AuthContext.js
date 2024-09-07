"use client";

import { createContext, useEffect, useState } from "react";
import { isLoggedIn as isLoggedInUtil } from "@/utils";
import { logout } from "@/actions";
import { useToast } from "@/hooks";
import { constants, routes } from "@/config";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export default AuthContext;

export function AuthState({ children }) {
  const [user, setUser] = useState(null);

  const { showSuccessMessage } = useToast();

  const router = useRouter();

  const setAuthState = async () => {
    const cookie = await isLoggedInUtil(true);
    if (cookie) {
      setUser(cookie);
    } else {
      setUser(false);
    }
  };
  const isLoggedIn = () => {
    return user;
  };
  const getLoggedInRole = () => {
    return user.role;
  };
  const logoutUser = async () => {
    await logout();
    setUser(false);
    showSuccessMessage(constants.SUCCESS.LOGGED_OUT);
    router.push(routes.home);
  };

  useEffect(() => {
    setAuthState();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoggedIn, logoutUser, getLoggedInRole }}
    >
      {children}
    </AuthContext.Provider>
  );
}
