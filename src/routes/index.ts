import { RouteProps } from "react-router-dom";
import Home from "../pages/Home";

export interface CustomRouteProps extends RouteProps {
    name: string
    label: string
}

const routes: CustomRouteProps[] = [
    {
        name: 'home',
        label: 'Home',
        path: '/',
        component: Home,
        exact: true,
    }
]

export default routes