import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramButton from "../../../components/kit/Button/TelegramButton";
import { PATH_HOUSEHOLD } from "../../../constants/Paths";
import "./onboarding.css";

export default function RelationShip() {
  const navigate = useNavigate();

  const [selectedRelationship, setSelectedRelationship] = useState("single");

  const handleRelationshipChange = (relationship) => {
    setSelectedRelationship(relationship);
  };

  return (
    <TelegramScreen showbackbutton={true}>
      <div className="container">
        <div>
          <div className="title-container">
            <TelegramText className="title-text">
              What is your relationship status?
            </TelegramText>
          </div>
          <div className="body-container">
            <div
              className="gender-option"
              onClick={() => handleRelationshipChange("single")}
            >
              <label className="gender-label">Single</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="single"
                  name="relationship"
                  checked={selectedRelationship === "single"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedRelationship === "single" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleRelationshipChange("married")}
            >
              <label className="gender-label">Married</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="married"
                  name="relationship"
                  checked={selectedRelationship === "married"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedRelationship === "married" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleRelationshipChange("divorced")}
            >
              <label className="gender-label">Divorced</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="divorced"
                  name="relationship"
                  checked={selectedRelationship === "divorced"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedRelationship === "divorced" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="gender-divider"></div>

            <div
              className="gender-option"
              onClick={() => handleRelationshipChange("widowed")}
            >
              <label className="gender-label">Widowed</label>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="widowed"
                  name="relationship"
                  checked={selectedRelationship === "widowed"}
                  onChange={() => {}}
                  className="gender-radio"
                />
                <span
                  className={`radio-custom ${
                    selectedRelationship === "widowed" ? "selected" : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <TelegramButton onClick={() => navigate(PATH_HOUSEHOLD)}>
            NEXT
          </TelegramButton>
        </div>
      </div>
    </TelegramScreen>
  );
}
