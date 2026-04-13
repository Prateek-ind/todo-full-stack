"use client";

import { useAuth } from "@/components/providers/AuthProvider";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/api/Auth";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  
  const handleLogout = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className=" flex items-center justify-between py-4 px-6 bg-zinc-50 dark:bg-zinc-900">
      <h1 className="text-3xl font-semibold">TaskFlow</h1>
      <div className="flex gap-4">
        {isLoggedIn && (
          <>
            <Button
              variant="outline"
              className="hover:text-red-500 hover:bg-red-50 rounded-xl cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
