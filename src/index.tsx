import { createRoot } from "react-dom/client";
import ThemeProvider from "app/providers/theme/ui/provider";
import { RouterProvider } from "react-router-dom";
import { router } from "app/providers/router";
import { Suspense } from "react";
import "shared/config/i18n";

const root = document.getElementById("root");

if (!root) {
    throw new Error('root not found.');
}

createRoot(root).render(
    <Suspense fallback={"Loading..."}>
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </Suspense>
);