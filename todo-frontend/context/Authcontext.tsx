"use client";
import { createContext } from "react";

export const AuthContext = createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  username: string;
  setUsername: (val: string) => void;
}>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  username: "",
  setUsername: () => {},
});
