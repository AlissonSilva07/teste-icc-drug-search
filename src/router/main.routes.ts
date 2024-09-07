import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from "../modules/drugSearch/routes/index.routes";

const route = createBrowserRouter([
    ...homeRoutes
])

export { route }