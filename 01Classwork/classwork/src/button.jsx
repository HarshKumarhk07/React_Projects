import { useState } from "react";
function DisableButton() {
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    setDisabled(true);
  };
  return (
    <button disabled={disabled} onClick={handleClick}>
      {disabled ? "Disabled" : "Click Me"}
    </button>
  );
}
export default DisableButton;