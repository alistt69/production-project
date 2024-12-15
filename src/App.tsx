import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classes";



const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;