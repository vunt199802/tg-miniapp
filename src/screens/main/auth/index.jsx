import { useNavigate } from "react-router-dom";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramButton from "../../../components/kit/Button/TelegramButton";
import { PATH_LOGIN, PATH_REGISTER } from "../../../constants/Paths";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import { ArrowRightIcon } from "lucide-react";
import "./index.css";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <TelegramScreen showbackbutton={true} className="gap-8">
      <img className="logo" src="./logo-2.svg" alt="logo" />

      <div className="container">
        <div className="text-container">
          <div className="title-container">
            <TelegramText className="title-text">
              Earn & Share Crypto in
            </TelegramText>
            <TelegramText className="title-text">one app</TelegramText>
          </div>

          <div className="subtitle-container">
            <TelegramText className="subtitle-text">
              It's easier to make cryptocurrency
            </TelegramText>
            <TelegramText className="subtitle-text">
              transactions in your hand, wherever and
            </TelegramText>
            <TelegramText className="subtitle-text">whenever</TelegramText>
          </div>
        </div>
        <div className="button-container">
          <TelegramButton onClick={() => navigate(PATH_REGISTER)}>
            <ArrowRightIcon className="icon" />
            CREATE ACCOUNT
          </TelegramButton>
          <TelegramButton
            className="login-button"
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
