"use client";

import React from "react";
import { useRouter } from "next/navigation";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

export const LoginButton = ({
  children,
  asChild,
  mode = "redirect",
}: LoginButtonProps) => {
  const router = useRouter();

  const handleLoginButtonClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <p>Todo: Implement modal</p>;
  }

  return (
    <span onClick={handleLoginButtonClick} className="cursor-pointer">
      {children}
    </span>
  );
};
