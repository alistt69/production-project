import { createRoot } from "react-dom/client";
import ThemeProvider from "app/providers/theme/ui/provider";
import "shared/config/i18n";
import App from "app/App";
import { ErrorBoundary } from "app/providers/error-boundary";
import { StoreProvider } from "app/providers/store";

const root = document.getElementById("root");

if (!root) {
    throw new Error('root not found.');
}

createRoot(root).render(
    <StoreProvider>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </StoreProvider>
);