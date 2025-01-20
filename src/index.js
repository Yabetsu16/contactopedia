import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import ContactIndex from "./Components/ContactPages/ContactIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ContactIndex />
  </>
);
