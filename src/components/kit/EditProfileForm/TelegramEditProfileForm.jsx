import { useState, useRef, useEffect } from "react";

import TelegramButton from "../Button/TelegramButton";
import TelegramPassword from "../Password/TelegramPassword";
import TelegramPhoneNumber from "../PhoneNumber/TelegramPhoneNumber";
import { Eye, EyeOff, ChevronDown } from "lucide-react";

import "./TelegramEditProfileForm.css";

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

const TelegramEditProfileForm = (props) => {
  const [input, setInput] = useState("");

  const onButtonClick = () => {
    props.onSubmit(input);
  };

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryListOpen, setIsCountryListOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    password: "",
  });

  // Error states
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const countryListRef = useRef(null);
  const countryButtonRef = useRef(null);

  const toggleCountryList = () => {
    setIsCountryListOpen(!isCountryListOpen);
  };

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

  const selectCountry = (country) => {
    setFormData({
      ...formData,
      country: country.name,
    });
    setIsCountryListOpen(false);
  };

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          <div className="input-container">
            <label htmlFor="firstName" className="input-label">
              First Name
            </label>
            <div className="input-field-container">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="text-input"
              />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="lastName" className="input-label">
              Last Name
            </label>
            <div className="input-field-container">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="text-input"
              />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <div className="input-field-container">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                className="text-input"
              />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="country" className="input-label">
              Country
            </label>
            <div className="input-field-container">
              <div className="country-selector-container">
                <button
                  ref={countryButtonRef}
                  type="button"
                  onClick={toggleCountryList}
                  className="country-selector full-width"
                >
                  <span>{formData.country || "Choose country"}</span>
                  <ChevronDown />
                </button>

                {isCountryListOpen && (
                  <div ref={countryListRef} className="country-dropdown">
                    <ul className="dropdown-list">
                      {countries.map((country) => (
                        <li key={country.code}>
                          <button
                            type="button"
                            onClick={() => selectCountry(country)}
                            className="dropdown-item"
                          >
                            <span>{country.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

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

export default TelegramEditProfileForm;
