import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/landing");
    }, 1000);
  }, [navigate]);

  return (
    <TelegramScreen showbackbutton={true} className="justify-center">
      <img src="./logo-1.svg" alt="logo" />
    </TelegramScreen>
  );
};

export default Main;
