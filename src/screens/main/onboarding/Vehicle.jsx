import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramButton from "../../../components/kit/Button/TelegramButton";
import { PATH_REGISTER_CONGRATULATION } from "../../../constants/Paths";
import "./onboarding.css";

export default function Vehicle() {
  const navigate = useNavigate();

  const [selectedVehicle, setSelectedVehicle] = useState("yes");

  const handleVehicleChange = (relationship) => {
    setSelectedVehicle(relationship);
  };

  return (
    <TelegramScreen showbackbutton={true}>
      <div className="container">
        <div>
          <div className="title-container">
            <TelegramText className="title-text">
              Do you have a vehicle?
            </TelegramText>
          </div>
          <div className="body-container">
            <div
              className="gender-option"
              onClick={() => handleVehicleChange("yes")}
            >
              <label className="gender-label">Yes</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="yes"
                  name="relationship"
                  checked={selectedVehicle === "yes"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedVehicle === "yes" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleVehicleChange("no")}
            >
              <label className="gender-label">No</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="no"
                  name="relationship"
                  checked={selectedVehicle === "no"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedVehicle === "no" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <TelegramButton
            onClick={() => navigate(PATH_REGISTER_CONGRATULATION)}
          >
            SUBMIT
          </TelegramButton>
        </div>
      </div>
    </TelegramScreen>
  );
}
