import React from "react";
import { useNavigate } from "react-router-dom";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramButton from "../../../components/kit/Button/TelegramButton";
import { PATH_GENDER } from "../../../constants/Paths";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <TelegramScreen showbackbutton={true}>
      <div className="p-[16px]">
        <img className="logo" src="./landing.svg" alt="logo" />
      </div>

      <div className="container">
        <div className="text-container ">
          <div className="title-container">
            <TelegramText className="title-text">
              Lets get you started!
            </TelegramText>
          </div>

          <TelegramText className="subtitle-text">
            Just answer a few questions and start earning free money!
          </TelegramText>
        </div>
        <div className="description-container">
          <TelegramText className="description-text">
            We’ll ask you some quick questions to set up your account, and
            you’ll be on your way to earning your rewards. It only takes a
            minute!
          </TelegramText>
        </div>
        <div className="button-container">
          <TelegramButton onClick={() => navigate(PATH_GENDER)}>
            GET STARTED
          </TelegramButton>
        </div>
      </div>
    </TelegramScreen>
  );
};

export default GetStarted;
