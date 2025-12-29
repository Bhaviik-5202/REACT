import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Bhaviik from "./Bhaviik.jsx";
import App from "./App.jsx";
import Class from "./Class.jsx";
import HelloGreet from "./HelloGreet.jsx";
import SimpleClass from "./SimpleClass.jsx";
import JavaScript from "./JavaScript.jsx";
import Props from "./Props.jsx";
import JsxDemo from "./JsxDemo.jsx";
import ClassComponent from "./ClassComponent.jsx";
import FunctionComponent from "./FunctionComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Bhaviik />
    <App />
    <SimpleClass />
    <Class />
    <HelloGreet />
    <JavaScript />
    <Props />
    <JsxDemo />
    <ClassComponent />
    <FunctionComponent />
  </StrictMode>
);