import { useState } from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import "./TelegramPassword.css";

const TelegramPassword = (props) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Error states
  const [passwordError, setPasswordError] = useState("");

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

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Clear error when user starts typing
    if (passwordError && value) {
      setPasswordError("");
    }
  };

  return (
    <div className="password-container">
      <label htmlFor="password" className="input-label">
        Password
      </label>
      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => validatePassword(password)}
          placeholder="Enter here"
          className={`password-input ${
            passwordError ? "password-input-error" : ""
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle-button"
        >
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>

      {passwordError && <p className="error-message">{passwordError}</p>}
    </div>
  );
};

export default TelegramPassword;
