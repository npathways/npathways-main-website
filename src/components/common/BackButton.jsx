import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = ({ label = "Back", to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button className="back-button" onClick={handleClick}>
      <span className="back-arrow">←</span>
      <span className="back-label">{label}</span>
    </button>
  );
};

export default BackButton;
