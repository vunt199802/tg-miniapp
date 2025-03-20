import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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

function Header({ title, showbackbutton = true, onboardingStatus }) {
  const navigate = useNavigate();
  return (
    <header className="header">
      {showbackbutton && (
        <Button variant="ghost" size="icon" className="back-button">
          <ArrowLeft onClick={() => navigate(-1)} />
        </Button>
      )}
      <h1 className="header-title">{title}</h1>
    </header>
  );
}

export default Header;
