import React from "react";
import TelegramLoginForm from "../../../components/kit/LoginForm/TelegramLoginForm";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import HEADER from "../../../components/app/main/layout/OnboardingHeader";

const Login = () => {
  const onSendMessage = async (message) => {
    console.log("message", message);
  };

  return (
    <TelegramScreen showbackbutton={true}>
      <HEADER title="LOG IN" />
      <TelegramLoginForm
        fieldhint={`Enter a message`}
        buttonlabel={"LOG IN"}
        onSubmit={onSendMessage}
      />
    </TelegramScreen>
  );
};

export default Login;
