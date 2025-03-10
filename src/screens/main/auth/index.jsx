import React from "react";
import { useNavigate } from "react-router-dom";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramButton from "../../../components/kit/Button/TelegramButton";
import { PATH_LOGIN, PATH_REGISTER } from "../../../constants/Paths";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import { ArrowRightIcon } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <TelegramScreen showbackbutton={true} className="gap-8">
      <img className="w-44 h-44" src="./logo-2.svg" alt="logo" />

      <div className="flex flex-col relative h-full w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center font-bold">
            <TelegramText className="text-[24px]">
              Earn & Share Crypto in
            </TelegramText>
            <TelegramText className="text-[24px]">one app</TelegramText>
          </div>

          <div className="flex flex-col items-center">
            <TelegramText className="text-[18px]">
              It's easier to make cryptocurrency
            </TelegramText>
            <TelegramText className="text-[18px]">
              transactions in your hand, wherever and
            </TelegramText>
            <TelegramText className="text-[18px]">whenever</TelegramText>
          </div>
        </div>
        <div className="w-full absolute bottom-0 flex flex-col gap-[8px]">
          <TelegramButton onClick={() => navigate(PATH_REGISTER)}>
            <ArrowRightIcon className="p-[4px] bg-white rounded-full text-black" />
            CREATE ACCOUNT
          </TelegramButton>
          <TelegramButton
            className="border-[1px] border-solid border-white bg-none"
            onClick={() => navigate(PATH_LOGIN)}
          >
            LOG IN
          </TelegramButton>
        </div>
      </div>
    </TelegramScreen>
  );
};

export default Auth;
