import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn.tsx";
import Main from "./components/Main.tsx";
import Signup from "./components/Signup.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route element={<App />}> */}
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
