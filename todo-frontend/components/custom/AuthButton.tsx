"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import AuthModal from "./AuthModal";

const AuthButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button
        onClick={handleOpen}
        className="rounded-xl py-2 px-6 cursor-pointer"
      >
        Register / Login
      </Button>
      <AuthModal open={open} setOpen={setOpen} />
    </>
  );
};

export default AuthButton;
