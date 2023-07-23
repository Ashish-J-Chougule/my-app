import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter name");

  const handleOnClick = () => {
    let abc = text.toUpperCase();
    setText(abc);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleToUpper = () => {
    setText(text.toLowerCase());
  };

  const handleToClear = () => {
    setText("");
  };

  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <label htmlFor="textId" className="form-label">
            Enter to convert upper case:
          </label>
          <textarea
            className="form-control"
            id="textId"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          value={text}
          onClick={handleOnClick}
        >
          Convert to Upper
        </button>
        <button className="btn btn-primary mx-1" onClick={handleToUpper}>
          Convert to Lower
        </button>
        <button className="btn btn-primary mx-1" onClick={handleToClear}>
          Clear Text
        </button>
      </div>

      <div className="container">
        <h2 className="my-3">Your Summary</h2>
        <p>
          There are total {text ? text.split(" ").length : 0} words and{" "}
          {text.length} characters in this page.
        </p>
        <p>
          Need {text ? 0.008 * text.split(" ").length : 0} minutes to read this
          page.
        </p>
        <h2 className="my-3">Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
