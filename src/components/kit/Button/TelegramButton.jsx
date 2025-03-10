import React from "react";
import "./TelegramButton.css";

const TelegramButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={
        "telegramButton inline-flex w-full rounded-full justify-center bg-gradient-to-r py-2 from-[#DC2366] to-[#4F5CAA] " +
        props.className
      }
    >
      {children}
    </button>
  );
};

export default TelegramButton;
