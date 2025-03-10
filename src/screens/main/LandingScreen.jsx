import React from "react";
import { useNavigate } from "react-router-dom";
import TelegramText from "../../components/kit/Text/TelegramText";
import TelegramButton from "../../components/kit/Button/TelegramButton";
import { PATH_AUTH } from "../../constants/Paths";
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import { ArrowRightIcon } from "lucide-react";

const Main = () => {
  const navigate = useNavigate();

  return (
    <TelegramScreen showbackbutton={true}>
      <img className="w-44 h-44" src="./landing.svg" alt="logo" />

      <div className="flex flex-col relative h-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center font-bold">
            <TelegramText className="text-[28px]">The Most</TelegramText>
            <TelegramText className="text-[28px]">
              Trusted & Secure
            </TelegramText>
            <TelegramText className="text-[28px]">
              Crypto Community
            </TelegramText>
          </div>

          <div className="flex">
            <TelegramText className="text-justify text-[18px]">
              Do you want a completely FREE way to earn real money? Money “that
              you can send to your family in our Blockm Wallet, get a Doctor at
              BlockMed, a lesson at BlockMed, pay for products at BigMudi, a
              delivery/ride at BlockRide, get a low-interest quick loan at
              BlockLoans?
            </TelegramText>
          </div>
        </div>
        <div className="w-full absolute bottom-0">
          <TelegramButton onClick={() => navigate(PATH_AUTH)}>
            <ArrowRightIcon className="p-[4px] bg-white rounded-full text-black" />
            Swipe to get started
          </TelegramButton>
        </div>
      </div>
    </TelegramScreen>
  );
};

export default Main;
