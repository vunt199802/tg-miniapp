import React from "react";
import { useNavigate } from "react-router-dom";
import TelegramLoginForm from "../../../components/kit/LoginForm/TelegramMiniForm";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramButton from "../../../components/kit/Button/TelegramButton";
import { PATH_LOGIN, PATH_REGISTER } from "../../../constants/Paths";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import { ArrowRightIcon } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const onSendMessage = async (message) => {
    console.log("message", message);
  };

  return (
    <TelegramScreen showbackbutton={true} className="gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center font-bold">
          <TelegramText className="text-2xl">Log in</TelegramText>
        </div>
      </div>
      <TelegramLoginForm
        fieldhint={`Enter a message`}
        buttonlabel={"LOG IN"}
        onSubmit={onSendMessage}
      />
    </TelegramScreen>
  );
};

export default Login;
