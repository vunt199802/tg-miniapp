import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramButton from "../../../components/kit/Button/TelegramButton";
import { PATH_RELATIONSHIP } from "../../../constants/Paths";
import "./onboarding.css";

export default function GenderSelection() {
  const navigate = useNavigate();

  const [selectedGender, setSelectedGender] = useState("male");

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <TelegramScreen showbackbutton={true}>
      <div className="container">
        <div>
          <div className="title-container">
            <TelegramText className="title-text">
              What is your gender?
            </TelegramText>
          </div>
          <div className="body-container">
            <div
              className="gender-option"
              onClick={() => handleGenderChange("male")}
            >
              <label className="gender-label">Male</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  checked={selectedGender === "male"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedGender === "male" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleGenderChange("female")}
            >
              <label className="gender-label">Female</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  checked={selectedGender === "female"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedGender === "female" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleGenderChange("prefer-not-to-say")}
            >
              <label className="gender-label">Prefer not to say</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="prefer-not-to-say"
                  name="gender"
                  checked={selectedGender === "prefer-not-to-say"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedGender === "prefer-not-to-say" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <TelegramButton onClick={() => navigate(PATH_RELATIONSHIP)}>
            NEXT
          </TelegramButton>
        </div>
      </div>
    </TelegramScreen>
  );
}
