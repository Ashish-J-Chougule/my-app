import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter name");

    const handleOnClick = ()=> {
        let abc = text.toUpperCase();
        setText(abc);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
    <>
      <div className="mb-3 my-3">
        <label htmlFor="textId" className="form-label">Enter to convert upper case:
        </label>
        <textarea
          className="form-control"
          id="textId"                                                                                                                                                                                                                                                                                                                                           
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" value={text} onClick={handleOnClick}>Click Here</button>
    </>
  );
}
