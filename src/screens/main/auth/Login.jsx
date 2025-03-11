import React from "react";
import { useNavigate } from "react-router-dom";
import TelegramLoginForm from "../../../components/kit/LoginForm/TelegramLoginForm";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";

const Login = () => {
  const navigate = useNavigate();

  const onSendMessage = async (message) => {
    console.log("message", message);
  };

  return (
    <TelegramScreen showbackbutton={true}>
      <TelegramLoginForm
        fieldhint={`Enter a message`}
        buttonlabel={"LOG IN"}
        onSubmit={onSendMessage}
      />
    </TelegramScreen>
  );
};

export default Login;
