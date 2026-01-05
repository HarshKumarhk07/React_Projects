import { useState } from "react";

function Ques1() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleCheck = () => {
    if (text.length < 5) {
      setMessage("text too short");
    } else if (text.length > 20) {
      setMessage("text too long");
    } else {
      setMessage("text length is perfect");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text"
      />
      <button onClick={handleCheck}>Check</button>
      <p>{message}</p>
    </div>
  );
}

export default Ques1;
