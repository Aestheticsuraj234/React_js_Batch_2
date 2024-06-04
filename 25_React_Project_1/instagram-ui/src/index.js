import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css"
import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"))


root.render(
    <GlobalProvider>
        <BrowserRouter>
            <App />
            <Toaster />
        </BrowserRouter>
    </GlobalProvider>
)