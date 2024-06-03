import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css"
import { Toaster } from "react-hot-toast";

const root = ReactDom.createRoot(document.getElementById("root"))


root.render(
    <>
    <App/>
    <Toaster/>
    </>
)