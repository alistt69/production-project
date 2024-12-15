import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import ThemeProvider from "./theme/provider";

const root = document.getElementById("root");

if (!root) {
    throw new Error('root not found.');
}

const container = createRoot(root)

container.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)