import { useState, useRef, useEffect } from "react";

import TelegramButton from "../Button/TelegramButton";
import TelegramPassword from "../Password/TelegramPassword";
import TelegramPhoneNumber from "../PhoneNumber/TelegramPhoneNumber";

import "./TelegramLoginForm.css";

const countries = [
  { code: "US", name: "United States", phoneCode: "+1" },
  { code: "GB", name: "United Kingdom", phoneCode: "+44" },
  { code: "CA", name: "Canada", phoneCode: "+1" },
  { code: "AU", name: "Australia", phoneCode: "+61" },
  { code: "DE", name: "Germany", phoneCode: "+49" },
  { code: "FR", name: "France", phoneCode: "+33" },
  { code: "JP", name: "Japan", phoneCode: "+81" },
  { code: "CN", name: "China", phoneCode: "+86" },
  { code: "IN", name: "India", phoneCode: "+91" },
  { code: "BR", name: "Brazil", phoneCode: "+55" },
];

const TelegramLoginForm = (props) => {
  const [input, setInput] = useState("");

  const onButtonClick = () => {
    props.onSubmit(input);
  };

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryListOpen, setIsCountryListOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  // Error states
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const countryListRef = useRef(null);
  const countryButtonRef = useRef(null);

  // Close country list when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        countryListRef.current &&
        countryButtonRef.current &&
        !countryListRef.current.contains(event.target) &&
        !countryButtonRef.current.contains(event.target)
      ) {
        setIsCountryListOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Validate phone number
  const validatePhone = (value) => {
    if (!value.trim()) {
      setPhoneError("Phone number is required");
      return false;
    } else if (value.length < 7) {
      setPhoneError("Phone number is too short");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  // Validate password
  const validatePassword = (value) => {
    if (!value.trim()) {
      setPasswordError("Password is required");
      return false;
    } else if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isPhoneValid = validatePhone(phoneNumber);
    const isPasswordValid = validatePassword(password);

    if (isPhoneValid && isPasswordValid) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", {
        country: selectedCountry.code,
        phoneNumber,
        password,
      });
    }
  };

  return (
    <div {...props} className={"telegramMiniForm " + props.className}>
      <form onSubmit={handleSubmit} className="form">
        {/* Phone Number Input */}
        <div>
          <TelegramPhoneNumber
            phoneError={phoneError}
            isCountryListOpen={isCountryListOpen}
          />

          {/* Password Input */}
          <TelegramPassword passwordError={passwordError} />

          <div className="forgot-password-container">
            <a href="/#" className="forgot-password-link">
              Forgot password?
            </a>
          </div>
        </div>

        <TelegramButton onClick={onButtonClick}>
          {props.buttonlabel}
        </TelegramButton>
      </form>
    </div>
  );
};

export default TelegramLoginForm;
