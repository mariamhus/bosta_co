import { useRoutes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Prices from "../pages/Prices";
import ContactUs from "../pages/ContactUs";

function Router(){

    const routes = [
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/home",
            element:<HomePage/>
        },
        {
            path:"/:id",
            element:<HomePage/>
        },
        {
            path:"#",
            element:<Prices/>
        },
        {
            path:"#",
            element:<ContactUs/>
        },
        {
            path: "/error-page",
            element: <ErrorPage />,
        },
        {
            path: "*",
            element: <ErrorPage />,
        },
    ];

    return useRoutes(routes);
}

export default Router;