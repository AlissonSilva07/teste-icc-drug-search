import { RouteObject } from "react-router-dom";
import { HomePage } from "../page";

const homeRoutes: RouteObject[] = [
    {
        path: '/home',
        element: <HomePage />
    }
]

export { homeRoutes }