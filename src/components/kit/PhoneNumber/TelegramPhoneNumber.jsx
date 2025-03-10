import { useState, useRef, useEffect } from "react";

import "./TelegramPhoneNumber.css";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryListOpen, setIsCountryListOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Error states
  const [phoneError, setPhoneError] = useState("");

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

  // Format phone number as user types
  const handlePhoneChange = (e) => {
    // Remove non-numeric characters
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);

    // Clear error when user starts typing
    if (phoneError && value) {
      setPhoneError("");
    }
  };

  const toggleCountryList = () => {
    setIsCountryListOpen(!isCountryListOpen);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsCountryListOpen(false);
  };

  return (
    <div className="input-container">
      <label htmlFor="phone" className="input-label">
        Phone Number
      </label>
      <div className="input-field-container">
        <div className="input-flex-container">
          {/* Country Selector */}
          <button
            ref={countryButtonRef}
            type="button"
            onClick={toggleCountryList}
            className="country-selector"
          >
            <span>{selectedCountry.code}</span>
            {isCountryListOpen ? <ChevronUp /> : <ChevronDown />}
          </button>

          {/* Phone Input */}
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneChange}
            onBlur={() => validatePhone(phoneNumber)}
            placeholder="Enter your valid number"
            className={`phone-input ${phoneError ? "phone-input-error" : ""}`}
          />
        </div>

        {/* Country Dropdown */}
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
                    <span className="country-code">{country.phoneCode}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Phone Error Message */}
        {phoneError && <p className="error-message">{phoneError}</p>}
      </div>
    </div>
  );
};

export default TelegramLoginForm;
