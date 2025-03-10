import React from "react";
import "./TelegramButton.css";

const TelegramButton = ({ children, ...props }) => {
  return (
    <button {...props} className={"telegramButton " + props.className}>
      {children}
    </button>
  );
};

export default TelegramButton;
