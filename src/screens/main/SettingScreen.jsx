import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH_EDIT_PROFILE, PATH_LANGUAGE } from "../../constants/Paths";

import {
  ArrowLeft,
  Check,
  ChevronRight,
  Edit,
  Grid,
  MessageSquare,
  QrCode,
  User,
} from "lucide-react";

// Custom Switch Component
const Switch = ({ checked, onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
};

// Custom Button Component
const Button = ({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  icon = false,
}) => {
  const buttonClass = `button button-${variant} button-${size} ${
    icon ? "button-icon" : ""
  } ${className}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

function Setting() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [copied, setCopied] = useState(false);
  const walletAddress = "0x32de343894f8e0124dC4fEe";

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <Button variant="ghost" size="icon" className="back-button">
          <ArrowLeft />
        </Button>
        <h1 className="header-title">My Settings</h1>
        <div className="header-actions">
          <Button variant="ghost" size="icon">
            <Grid />
          </Button>
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="avatar-container">
            <div className="avatar">
              <img src="man.svg" alt="Profile" className="avatar-image" />
            </div>
            <Button
              onClick={() => alert("Edit avatar")}
              className="avatar-edit-button"
              size="icon"
            >
              <Edit className="icon-small" />
            </Button>
          </div>
          <h2 className="profile-name">Puerto Rico</h2>
          <p className="profile-info">puerto22@gmail.com | +01 234 567 89</p>
        </div>

        {/* Settings List */}
        <div className="settings-list">
          <div className="settings-item-container">
            <div
              className="settings-item clickable"
              onClick={() => navigate(PATH_EDIT_PROFILE)}
            >
              <div className="settings-item-content">
                <User className="settings-icon" />
                <span>Edit profile</span>
              </div>
              <ChevronRight className="settings-icon" />
            </div>

            <div className="settings-item">
              <div className="settings-item-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="settings-icon"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                <span>Notifications</span>
              </div>
              <Switch
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
            </div>

            <div
              className="settings-item clickable"
              onClick={() => navigate(PATH_LANGUAGE)}
            >
              <div className="settings-item-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="settings-icon"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
                <span>Language</span>
              </div>
              <span className="language-value">English</span>
            </div>
          </div>
          <div className="settings-item-container">
            <div className="settings-item">
              <div className="settings-item-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="settings-icon"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
                <span>Dark Mode</span>
              </div>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </div>

            <div className="settings-item clickable">
              <div className="settings-item-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="settings-icon"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Privacy policy</span>
              </div>
              <ChevronRight className="settings-icon" />
            </div>
          </div>
          <div className="settings-item-container">
            <div
              className="settings-item clickable wallet-item"
              onClick={copyToClipboard}
            >
              <div className="settings-item-content">
                <QrCode className="settings-icon" />
                <span>Wallet Address</span>
              </div>
              <div className="wallet-address-container">
                <span className="wallet-address">{walletAddress}</span>
                {copied ? (
                  <Check className="settings-icon check-icon" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="settings-icon"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <Button variant="ghost" className="nav-button">
          <Grid className="icon" />
          <span className="nav-label">Main Menu</span>
        </Button>
        <Button variant="ghost" className="nav-button">
          <MessageSquare className="icon" />
          <span className="nav-label">Message</span>
        </Button>
        <Button variant="ghost" className="nav-button active">
          <User className="icon" />
          <span className="nav-label">Profile</span>
        </Button>
      </div>
    </div>
  );
}

export default Setting;
