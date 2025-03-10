import { useState, useRef, useEffect } from "react";

import TelegramButton from "../Button/TelegramButton";
import "./TelegramMiniForm.css";
import { EyeIcon, EyeOffIcon, ChevronDown, ChevronUp } from "lucide-react";

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

const TelegramMiniForm = (props) => {
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onButtonClick = () => {
    props.onSubmit(input);
  };
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryListOpen, setIsCountryListOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Clear error when user starts typing
    if (passwordError && value) {
      setPasswordError("");
    }
  };

  const toggleCountryList = () => {
    setIsCountryListOpen(!isCountryListOpen);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsCountryListOpen(false);
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
    <div {...props} className={"telegramMiniForm w-full " + props.className}>
      <form onSubmit={handleSubmit} className="w-full space-y-[32px]">
        {/* Phone Number Input */}
        <div className="space-y-[8px]">
          <label
            htmlFor="phone"
            className="block text-white text-sm font-medium"
          >
            Phone Number
          </label>
          <div className="relative">
            <div className="flex">
              {/* Country Selector */}
              <button
                ref={countryButtonRef}
                type="button"
                onClick={toggleCountryList}
                className="flex items-center justify-between bg-transparent border-b border-gray-600 text-white px-[8px] py-[8px] w-16"
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
                className={`bg-transparent border-b ${
                  phoneError ? "border-red-500" : "border-gray-600"
                } text-white px-[8px] py-[8px] w-full focus:outline-none focus:border-gray-400`}
              />
            </div>

            {/* Country Dropdown */}
            {isCountryListOpen && (
              <div
                ref={countryListRef}
                className="absolute z-10 mt-[4px] w-64 bg-gray-900 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto"
              >
                <ul className="py-1">
                  {countries.map((country) => (
                    <li key={country.code}>
                      <button
                        type="button"
                        onClick={() => selectCountry(country)}
                        className="flex justify-between items-center w-full px-[16px] py-[8px] text-sm text-white hover:bg-gray-800"
                      >
                        <span>{country.name}</span>
                        <span className="text-gray-400">
                          {country.phoneCode}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Phone Error Message */}
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">{phoneError}</p>
            )}
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-[8px]">
          <label
            htmlFor="password"
            className="block text-white text-sm font-medium"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={() => validatePassword(password)}
              placeholder="Enter here"
              className={`bg-transparent border-b ${
                passwordError ? "border-red-500" : "border-gray-600"
              } text-white px-[8px] py-[8px] w-full focus:outline-none focus:border-gray-400`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-[8px]"
            >
              {!showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>

          {/* Password Error Message */}
          {passwordError && (
            <p className="text-red-500 text-xs mt-1">{passwordError}</p>
          )}

          <div className="text-right">
            <a href="/#" className="text-[#D2276A] text-sm">
              Forgot password?
            </a>
          </div>
        </div>

        <TelegramButton onClick={onButtonClick} className="mt-[8px]">
          {props.buttonlabel}
        </TelegramButton>
      </form>
    </div>
  );
};

export default TelegramMiniForm;
