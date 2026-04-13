'use client'
import { AuthContext } from "@/context/Authcontext";
import { useContext, useState } from "react";

export const AuthProvider = ({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: boolean;
  initialUsername: string
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialValue);
  const [username, setUsername]=useState<string>("")
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, username, setUsername}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
