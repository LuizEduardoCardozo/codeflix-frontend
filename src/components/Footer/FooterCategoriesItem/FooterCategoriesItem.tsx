import { MuiThemeProvider, Menu as MuiMenu, MenuItem } from "@material-ui/core";
import MovieIcon from "@material-ui/icons/Movie";
import { Link } from "react-router-dom";

import menuTheme from "../../Navbar/Menus/menuTheme";
import { useMenu } from "../../../hooks/useMenu";
import { FooterItem, FooterItemProps } from "../FooterItem";

interface FooterCategoriesItemProps extends FooterItemProps {
    currentRoute: string | undefined;
}

export const FooterCategoriesItem: React.FunctionComponent<FooterCategoriesItemProps> = (
    props
) => {
    console.log(props.currentRoute)
    const { anchorEl, open, handleClose, handleOpen, } = useMenu();
    return (
        <>
            <FooterItem
                {...props}
                label="Conteudos"
                icon={<MovieIcon />}
                onClick={handleOpen}
                selected={props.currentRoute === 'videos-by-categories'}
            />
            <MuiThemeProvider theme={menuTheme}>
                <MuiMenu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                    getContentAnchorEl={null}
                >
                    <MenuItem
                        component={Link}
                        to={"/categories/filmes-id"}
                        onClick={handleClose}                    
                    >
                        Filmes
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        to={"/categories/documentarios-id"}
                        onClick={handleClose}                    
                    >
                        Documentários
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        to={"/categories/series-id"}
                        onClick={handleClose}                    
                    >
                        Séries
                    </MenuItem>
                </MuiMenu>
            </MuiThemeProvider>  
        </>
    )
}
