import React, { useState } from "react";

export default function About() {
  let [lightBtn, darkBtn] = useState("Enable Light Mode");
  let [text, setText] = useState({
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
  });

  const handleMode = () => {
    if (text.color === "white") {
      setText({
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
      });
      darkBtn("Enable Dark Mode");
    } else {
      setText({
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
      });
      darkBtn("Enable Light Mode");
    }
  };

  const changeHoverBackground = (e) => {
    if (text.color === "white") {
      e.target.style.background = 'red';
    }else{
      e.target.style.background = 'yellow';
    }
  }

  const changeLeaveBackground = (e) => {
    e.target.style.background = text.backgroundColor;
    e.target.style.color = text.color;;
  }

  return (
    <>
      <div className="container">
        <h2>About</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={text}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={text}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={text}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={text}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={text}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={text}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" onMouseOver={changeHoverBackground} onMouseLeave={changeLeaveBackground}>
                This is the third item's accordion body. It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary my-2 mx-2" onClick={handleMode}>
          {lightBtn}
        </button>
      </div>
    </>
  );
}
