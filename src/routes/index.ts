import { RouteProps } from "react-router-dom";
import Home from "../pages/Home";
import { VideosByCategory } from "../pages/VideosByCategory";

export interface CustomRouteProps extends RouteProps {
    name: string
    label: string
}

export const routes: CustomRouteProps[] = [
    {
        name: 'home',
        label: 'Home',
        path: '/',
        component: Home,
        exact: true,
    },
    {
        name: 'videos-by-categories',
        label: 'Videos por Categoria',
        path: '/categories/:id',
        component: VideosByCategory,
        exact: true,
    },
    {
        name: 'notifications',
        label: 'Notificações',
        path: '/notifications',
        component: Home,
        exact: true,
    }
]