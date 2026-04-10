"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, register } from "@/lib/api/Auth";

type AuthMode = "login" | "register";

const AuthModal = ({ open, setOpen }: any) => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      if (mode === "login") {
        return login(formData.email, formData.password);
      } else {
        return register(formData.username, formData.email, formData.password);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: any) => {
      setError(error.message || "Authentication failed");
    },
  });

  const handleMode = () => {
    setMode(mode === "login" ? "register" : "login");
    setError("");
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await mutation.mutateAsync();
      setOpen(false);
      setError("");
      // Wait for cookies to be set properly
      setTimeout(() => {
        router.push("/todos");
        router.refresh(); // Refresh server component to pick up new cookies
      }, 500);
    } catch (error: any) {
      console.error("Auth error:", error);
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="rounded-xl [&>button]:cursor-pointer [&>button]:hover:opacity-70">
        <DialogHeader>
          <DialogTitle className="text-3xl">
            {mode === "login" ? "Welcome back" : "Create Account"}
          </DialogTitle>
          <DialogDescription>
            {mode === "login"
              ? "Login to your account to continue"
              : "Start organizing your tasks in seconds"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {mode === "register" && (
            <Input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full  rounded-xl"
              onChange={handleChange}
            />
          )}
          <Input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full rounded-xl"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded-xl"
            onChange={handleChange}
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl dark:text-white cursor-pointer hover:opacity-70"
          >
            {mode === "login" ? "Login" : "Register"}
          </Button>
          <p className="text-sm text-center text-zinc-500">
            {loading
              ? "Please wait..."
              : mode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
            <span
              onClick={handleMode}
              className="cursor-pointer text-zinc-900 dark:text-white "
            >
              {mode === "login" ? "Sign up" : "Login"}
            </span>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
