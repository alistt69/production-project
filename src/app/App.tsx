import { router } from "app/providers/router";
import { RouterProvider } from "react-router-dom";
import { Loader } from "shared/ui/loader";
import { Suspense, useEffect } from "react";
import { classNames } from "shared/lib/classes";
import { useTheme } from "app/providers/theme";
import "./styles/index.scss";

const App = () => {
    const { theme } = useTheme();

    /*useEffect(() => {
        if (Math.random() > 0.5) {
            throw new Error()
        }
    }, []);*/

    return (
        <div className={classNames("root", {}, [ theme ])}>
            <Suspense fallback={<Loader/>}>
                <RouterProvider router={router}/>
                <div id="portal-root"></div>
            </Suspense>
        </div>
    );
};

export default App;