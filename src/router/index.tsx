import { useRoutes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Shipping from "../pages/Shipping";
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
            path:"/prices",
            element:<Prices/>
        },
        {
            path:"/contact-us",
            element:<ContactUs/>
        },
        {
            path:"/:trackingNumber",
            element:<Shipping/>
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