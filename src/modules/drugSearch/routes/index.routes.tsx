import { RouteObject } from "react-router-dom";
import { HomePage } from "../page";
import { BaseLayout } from "../../../shared/components/baseLayout";
import { FavoritesPage } from "../submodules/favorites/page";

const homeRoutes: RouteObject[] = [
    {
        path: '/',
        element: <BaseLayout>
                    <HomePage />
                </BaseLayout>
    },
    {
        path: '/favorites',
        element: <BaseLayout>
                    <FavoritesPage />
                </BaseLayout>
    }
]

export { homeRoutes }