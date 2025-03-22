"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { PATH_LOGIN, PATH_GETSTARTED } from "../../../constants/Paths";
import { useTelegram } from "../../../hooks/useTelegram";
import { useNavigate } from "react-router-dom";

import TelegramButton from "../Button/TelegramButton";

import "./TelegramRegisterForm.css";
import CryptoJS from "crypto-js";

const countries = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "CN", name: "China" },
  { code: "IN", name: "India" },
  { code: "BR", name: "Brazil" },
];

const TelegramRegisterForm = () => {
  const { user, initData } = useTelegram();
  console.log("======= user", user, initData);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    hash: "",
    id: user?.id,
    username: user?.username,
    firstName: user?.first_name,
    lastName: user?.last_name,
    roleId: "5ebcff5991b7084528ebeb19",
    appsChannelKey: "aa",
    deviceId: "aa",
  });

  // const [showPassword, setShowPassword] = useState(false);
  // const [isCountryListOpen, setIsCountryListOpen] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  // const countryListRef = useRef(null);
  // const countryButtonRef = useRef(null);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  // const toggleCountryList = () => {
  //   setIsCountryListOpen(!isCountryListOpen);
  // };

  // const selectCountry = (country) => {
  //   setFormData({
  //     ...formData,
  //     country: country.name,
  //   });
  //   setIsCountryListOpen(false);
  // };

  useEffect(() => {
    const payload = {
      id: "6260876829",
      username: "rexcare_77",
      first_name: "rexcare",
      last_name: "era",
      roleId: "5ebcff5991b7084528ebeb19",
      appsChannelKey: "aa",
      deviceId: "aa",
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="firstName" className="input-label">
            Telegram Id
          </label>
          <div className="input-field-container">
            <input
              type="text"
              id="id"
              name="id"
              value={user?.id}
              placeholder="Enter name"
              className="text-input"
            />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="firstName" className="input-label">
            Username
          </label>
          <div className="input-field-container">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user?.username}
              placeholder="Enter name"
              className="text-input"
            />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="firstName" className="input-label">
            First Name
          </label>
          <div className="input-field-container">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user?.first_name}
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
              value={user?.last_name}
              placeholder="Enter name"
              className="text-input"
            />
          </div>
        </div>

        {/* <div className="input-container">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <div className="input-field-container">
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter here"
                className="text-input password-input"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle-button"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
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
        </div> */}

        <div className="terms-container">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
              className="checkbox-input"
            />
            <span className="custom-checkbox"></span>
            <span className="terms-text">
              By clicking here, you are agreeing to our{" "}
              <a href="/#" className="terms-link">
                Terms & Conditions
              </a>
            </span>
          </label>
        </div>

        <TelegramButton onClick={() => navigate(PATH_GETSTARTED)}>
          NEXT
        </TelegramButton>
      </form>

      <div className="login-link-container">
        <p>
          Already have an account?{" "}
          <a href={PATH_LOGIN} className="login-link">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default TelegramRegisterForm;
