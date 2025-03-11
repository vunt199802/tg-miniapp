import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramText from "../../components/kit/Text/TelegramText";
import TelegramButton from "../../components/kit/Button/TelegramButton";
import { PATH_SETTING } from "../../constants/Paths";
import "./onboarding/onboarding.css";

export default function Vehicle() {
  const navigate = useNavigate();

  const [selectedVehicle, setSelectedVehicle] = useState("en");

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
              onClick={() => handleVehicleChange("en")}
            >
              <label className="gender-label">English</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="en"
                  name="relationship"
                  checked={selectedVehicle === "en"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedVehicle === "en" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleVehicleChange("fr")}
            >
              <label className="gender-label">Francais</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="fr"
                  name="relationship"
                  checked={selectedVehicle === "fr"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedVehicle === "fr" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleVehicleChange("es")}
            >
              <label className="gender-label">Español</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="es"
                  name="relationship"
                  checked={selectedVehicle === "es"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedVehicle === "es" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleVehicleChange("pt")}
            >
              <label className="gender-label">Português</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="pt"
                  name="relationship"
                  checked={selectedVehicle === "pt"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedVehicle === "pt" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleVehicleChange("zh")}
            >
              <label className="gender-label">普通话</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="zh"
                  name="relationship"
                  checked={selectedVehicle === "zh"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedVehicle === "zh" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <TelegramButton onClick={() => navigate(PATH_SETTING)}>
            SUBMIT
          </TelegramButton>
        </div>
      </div>
    </TelegramScreen>
  );
}
