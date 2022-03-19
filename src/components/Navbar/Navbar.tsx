import { AppBar, Grid, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search"

import { MenuAccount } from "./Menus/MenuAccount";
import { MenuCategories } from "./Menus/MenuCategories";
import { Notifications } from './Notifications'
import { InputSearch } from "./InputSearch/InputSearch";
import Title from './Title';
import { useSmallWindow } from "../../hooks/useSmallWindow";
import { useCallback, useContext } from "react";
import { DialogSearchContext } from "./DialogSearch/DialogSearchContext";

const useStyles = makeStyles((themes) => ({
    root: {
        flexGrow: 1,
    },
}));

const Navbar: React.FunctionComponent = () => {
    const classes = useStyles();
    const isSmallWindow = useSmallWindow();

    const dialogContext = useContext(DialogSearchContext);
    const handleOpen = useCallback(() => {
        dialogContext.show()
    }, [dialogContext])

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    {!isSmallWindow &&  <MenuCategories />}
                    <Title />
                    {!isSmallWindow && (
                    <>
                        <Grid container justifyContent="center">
                            <Grid item xs={8} lg={7}>
                                <InputSearch />
                            </Grid>
                        </Grid>
                        <Notifications />
                        <MenuAccount />
                    </>
                    )}
                    {isSmallWindow && (
                        <Grid container justifyContent={"flex-end"}>
                            <IconButton onClick={handleOpen}>
                                <SearchIcon />
                            </IconButton>
                        </Grid>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export { Navbar }