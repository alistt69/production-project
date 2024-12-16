import { Outlet } from "react-router-dom";
import { Sidebar } from "widgets/sibedar";
import { Navbar } from "widgets/navbar";

const RootLayout = () => {

    return (
        <>
            <Navbar />
            <div className={"content-page"}>
                <Sidebar/>
                <Outlet/>
            </div>
        </>
    )
}

export default RootLayout;