import { Route, Switch } from "react-router-dom"
import { CustomRouteProps, routes } from '.'

const AppRouter: React.FunctionComponent = () => {
    return (
        <Switch>
            {
                routes.map((route: CustomRouteProps, key) => {
                    return (
                        <Route
                            key={key}
                            path={route.path}   
                            component={route.component}
                            exact={route.exact === true}
                         />
                    )
                })
            }
        </Switch>
    )
}

export { AppRouter }