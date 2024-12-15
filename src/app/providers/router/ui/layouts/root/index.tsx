import { Outlet } from "react-router-dom";
import App from "app/App";
import { classNames } from "shared/lib/classes";
import { useTheme } from "app/providers/theme";
import { Sidebar } from "widgets/sibedar";

const RootLayout = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('root', {}, [ theme ])}>
            <App />
            <div className={"content-page"}>
                <Sidebar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default RootLayout;