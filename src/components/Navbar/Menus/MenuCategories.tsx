import { IconButton, Menu as MuiMenu, MenuItem, MuiThemeProvider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useMenu } from "../../../hooks/useMenu";
import { CustomRouteProps, routes } from "../../../routes"

import menuTheme from './menuTheme';

const listRoutes = {
    home: "Inicio"
}

const menuRoutes = routes.filter((route) => 
    Object.keys(listRoutes).includes(route.name)
)

const MenuCategories: React.FunctionComponent = () => {
    const { open, anchorEl, handleClose, handleOpen } = useMenu()
    return (
        <MuiThemeProvider theme={menuTheme}>
            <div>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpen}
                >
                    <MenuIcon />
                </IconButton>

                <MuiMenu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    getContentAnchorEl={null}
                >
                    {Object.keys(listRoutes).map((routeName, key) => {
                        const route = menuRoutes.find(
                            (route) => route.name === routeName
                        ) as CustomRouteProps;
                        return (
                            <MenuItem
                                key={key}
                                component={Link}
                                to={route.path as string}
                                onClick={handleClose}
                            >
                                {listRoutes[routeName as keyof typeof listRoutes]}
                            </MenuItem>
                        );
                    })}
                    {
                        <MenuItem
                            component={Link} to={"/categories/1"} onClick={handleClose}
                        >
                            Categorias
                        </MenuItem>
                    }
                </MuiMenu>
            </div>
        </MuiThemeProvider>
    )
}

export { MenuCategories }