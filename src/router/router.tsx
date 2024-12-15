import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Suspense } from "react";
import { paths } from "./routes";
import RootLayout from "../layouts/root";
import { LazyMain } from "../pages/main/lazy";
import { LazyAbout } from "../pages/about/lazy";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={paths.ROOT} element={<RootLayout />}>
            <Route index element={<Suspense fallback={'Loading...'}><LazyMain /></Suspense>} />
            <Route path={paths.ABOUT} element={<Suspense fallback={'Loading...'}><LazyAbout /></Suspense>} />
        </Route>
    ),
);
