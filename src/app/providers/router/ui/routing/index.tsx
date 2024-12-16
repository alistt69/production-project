import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../layouts/root";
import { routeConfig } from "shared/config/routes";
import { ErrorPage } from "pages/error";
import { Suspense } from "react";
import { Loader } from "shared/ui/loader";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<Loader />}>
                            <div className={"page-wrapper"}>
                                {element}
                            </div>
                        </Suspense>
                    }
                />
            ))}
        </Route>
    ),
);
