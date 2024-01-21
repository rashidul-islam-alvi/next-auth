import React from "react";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

const LoginButton = ({
  children,
  asChild,
  mode = "redirect",
}: LoginButtonProps) => {
  const handleLoginButtonClick = () => {
    console.log("Login Button Clicked");
  };

  return (
    <span onClick={handleLoginButtonClick} className="cursor-pointer">
      {children}
    </span>
  );
};
