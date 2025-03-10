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
      <div className="p-[16px]">
        <img className="logo" src="./landing.svg" alt="logo" />
      </div>

      <div className="container">
        <div className="text-container ">
          <div className="title-container">
            <TelegramText className="title-text">The Most</TelegramText>
            <TelegramText className="title-text">Trusted & Secure</TelegramText>
            <TelegramText className="title-text">Crypto Community</TelegramText>
          </div>

          <TelegramText className="text-justify subtitle-text">
            Do you want a completely FREE way to earn real money? Money “that
            you can send to your family in our Blockm Wallet, get a Doctor at
            BlockMed, a lesson at BlockMed, pay for products at BigMudi, a
            delivery/ride at BlockRide, get a low-interest quick loan at
            BlockLoans?
          </TelegramText>
        </div>
        <div className="button-container">
          <TelegramButton onClick={() => navigate(PATH_AUTH)}>
            <ArrowRightIcon className="icon" />
            Swipe to get started
          </TelegramButton>
        </div>
      </div>
    </TelegramScreen>
  );
};

export default Main;
