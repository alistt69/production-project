import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../layouts/root";
import { routeConfig } from "shared/config/routes";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className={"page-wrapper"}>
                                {element}
                            </div>
                        }
                    />
            ))}
        </Route>
    ),
);
