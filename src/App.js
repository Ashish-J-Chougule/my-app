// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#bec3c9";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#868e96";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };

  setTimeout(() => {
    setAlert(null);
  }, 2500);

  return (
    <>
      <Navbar title="Navbar" navbarMode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          title="This is form"
          toggleMode={mode}
          showAlert={showAlert}
        />
      </div>
      {/* <Navbar/> */}
      <About />
    </>
  );
}

export default App;
