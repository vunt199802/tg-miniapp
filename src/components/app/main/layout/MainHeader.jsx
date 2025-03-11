import { useNavigate } from "react-router-dom";
import { ArrowLeft, Grid } from "lucide-react";

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

function Header({ title, action }) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Button variant="ghost" size="icon" className="back-button">
        <ArrowLeft onClick={() => navigate(-1)} />
      </Button>
      <h1 className="header-title">{title}</h1>
      {action && (
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
      )}
    </header>
  );
}

export default Header;
