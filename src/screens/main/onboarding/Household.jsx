import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramButton from "../../../components/kit/Button/TelegramButton";
import { PATH_VEHICLE } from "../../../constants/Paths";
import "./onboarding.css";

export default function Household() {
  const navigate = useNavigate();

  const [selectedHousehold, setSelectedHousehold] = useState("more-than-5");

  const handleHouseholdChange = (relationship) => {
    setSelectedHousehold(relationship);
  };

  return (
    <TelegramScreen showbackbutton={true}>
      <div className="container">
        <div>
          <div className="title-container">
            <TelegramText className="title-text">
              How many people are in your household?
            </TelegramText>
          </div>
          <div className="body-container">
            <div
              className="gender-option"
              onClick={() => handleHouseholdChange("more-than-5")}
            >
              <label className="gender-label">More than 5</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="more-than-5"
                  name="relationship"
                  checked={selectedHousehold === "more-than-5"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedHousehold === "more-than-5" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleHouseholdChange("less-than-5")}
            >
              <label className="gender-label">Less than 5</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="less-than-5"
                  name="relationship"
                  checked={selectedHousehold === "less-than-5"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedHousehold === "less-than-5" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <TelegramButton onClick={() => navigate(PATH_VEHICLE)}>
            NEXT
          </TelegramButton>
        </div>
      </div>
    </TelegramScreen>
  );
}
