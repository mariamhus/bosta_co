import { useRoutes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Shipping from "../pages/Shipping";

function Router(){

    const routes = [
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