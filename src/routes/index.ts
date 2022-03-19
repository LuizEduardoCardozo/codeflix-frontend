import { RouteProps } from "react-router-dom";
import Home from "../pages/Home";

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
        name: 'categories',
        label: 'Categories',
        path: '/categories/:id',
        component: Home,
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