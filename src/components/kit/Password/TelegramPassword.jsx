import { useState } from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";

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
    </div>
  );
};

export default TelegramPassword;
