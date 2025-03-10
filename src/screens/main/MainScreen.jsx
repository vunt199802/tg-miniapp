import React, { useEffect } from "react";
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import { useTelegram } from "../../hooks/useTelegram";
import { useNavigate } from "react-router-dom";
import { PATH_SERVER } from "../../constants/Paths";
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramDetailedButton from "../../components/kit/DetailedButton/TelegramDetailedButton";

const Main = () => {
  const { user } = useTelegram();
  const navigate = useNavigate();

  return (
    <TelegramScreen showbackbutton={true}>
      <img src="./logo-1.svg" alt="logo" />
    </TelegramScreen>
  );
};

export default Main;
