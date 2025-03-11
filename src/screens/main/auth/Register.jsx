import React from "react";
import TelegramRegisterForm from "../../../components/kit/RegisterForm/TelegramRegisterForm";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import HEADER from "../../../components/app/main/layout/OnboardingHeader";

const Login = () => {
  const onSendMessage = async (message) => {
    console.log("message", message);
  };

  return (
    <TelegramScreen showbackbutton={true} className="gap-[32px]">
      <HEADER title="Create your account" />
      <TelegramRegisterForm
        fieldhint={`Enter a message`}
        buttonlabel={"NEXT"}
        onSubmit={onSendMessage}
      />
    </TelegramScreen>
  );
};

export default Login;
