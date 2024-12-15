import { Outlet } from "react-router-dom";
import { Counter } from "../../components";

const RootLayout = () => {
    return (
        <>
            <Counter />
            <Outlet />
        </>
    )
}

export default RootLayout;