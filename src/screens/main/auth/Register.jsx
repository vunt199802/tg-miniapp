import React from "react";
import { useNavigate } from "react-router-dom";
import TelegramRegisterForm from "../../../components/kit/RegisterForm/TelegramRegisterForm";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";

const Login = () => {
  const navigate = useNavigate();

  const onSendMessage = async (message) => {
    console.log("message", message);
  };

  return (
    <TelegramScreen showbackbutton={true} className="gap-[32px]">
      <TelegramRegisterForm
        fieldhint={`Enter a message`}
        buttonlabel={"NEXT"}
        onSubmit={onSendMessage}
      />
    </TelegramScreen>
  );
};

export default Login;
