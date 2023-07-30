// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "white";
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
    <Router>
      <Navbar title="Navbar" navbarMode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Routes> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              title="This is form"
              toggleMode={mode}
              showAlert={showAlert}
            />
          }
        >
          {/* <div className="container"> */}

          {/* </div> */}
        </Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
      {/* </Routes> */}
    </Router>
  );
}

export default App;
