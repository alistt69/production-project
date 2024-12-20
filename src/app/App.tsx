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
            <button onClick={() => {
                throw new Error()
            }}>bug
            </button>
            <Suspense fallback={<Loader/>}>
                <RouterProvider router={router}/>
            </Suspense>
        </div>
    );
};

export default App;