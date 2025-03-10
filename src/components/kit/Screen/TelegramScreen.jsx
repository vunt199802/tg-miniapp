import React, { useEffect } from "react";
import "./TelegramScreen.css";
import { useTelegram } from "../../../hooks/useTelegram";

const TelegramScreen = (props) => {
  const { webApp } = useTelegram();
  useEffect(() => {
    if (props.showbackbutton) {
      webApp.BackButton.show();
    } else {
      webApp.BackButton.hide();
    }
  }, [webApp]);

  return (
    <div
      {...props}
      className={
        "telegramScreen p-4 relative flex flex-col items-center " +
        props.className
      }
    />
  );
};

export default TelegramScreen;
