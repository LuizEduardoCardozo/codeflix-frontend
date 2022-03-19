import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { MenuAccount } from "./Menus/MenuAccount";
import { MenuCategories } from "./Menus/MenuCategories";
import { Notifications } from './Notifications'
import { InputSearch } from "./InputSearch/InputSearch";
import Title from './Title';
import { useSmallWindow } from "../../hooks/useSmallWindow";

const useStyles = makeStyles((themes) => ({
    root: {
        flexGrow: 1,
    },
}));

const Navbar: React.FunctionComponent = () => {
    const classes = useStyles();
    const isSmallWindow = useSmallWindow();

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
                </Toolbar>
            </AppBar>
        </div>
    )
}

export { Navbar }