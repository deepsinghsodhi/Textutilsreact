import React, { useState } from "react";
export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    settext(newText);
    props.showalert("converted to uppercase!","success");
    // settext('you have clicked on handleupclick')
  }
  const handleLoClick = () => {
    // console.
    // log("uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    settext(newText);
    props.showalert("converted to Lowercase!","success");
    // settext('you have clicked on handleupclick')
  }
  const handleClearText = () => {
    let newText = " ";
    settext(newText);
    props.showalert("Text Cleared!","success");
  }
  const handleOnChange = (event) => {
    // console.log("On change")
    settext(event.target.value);
  }

  const [text, settext] = useState("");
  return (
    <>
      <div className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea value={text} onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="form-control"
              id="text-box"
              rows="8"></textarea>
          </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>your text summary</h1>
        <p>
          {text.length} characters and {text.split(" ").length} words
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
