import { AppBar, BottomNavigation, makeStyles } from "@material-ui/core";
import { FooterItem } from "./FooterItem";

import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import { DialogMyAccount } from "./DialogMyAccount/DialogMyAccount";
import { useCallback, useMemo, useState } from "react";
import { matchPath, useHistory, useLocation } from "react-router-dom";
import { routes } from "../../routes";

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.background.default,
        bottom: 0,
        top: "auto",
        borderTop: `1px solid ${theme.palette.text.secondary}`,
        height: "48px",
    },
    bottomNavigation: {
        backgroundColor: "inherit",
    },
}));

export const MobileFooter: React.FunctionComponent = () => {
    const classes = useStyle();
    const history = useHistory();
    const [openDialogAccount, setOpenDialogAccount] = useState(false);

    const { pathname } = useLocation();
    const currentRoute = useMemo(
        () => routes.find(r => matchPath(pathname, r))?.name, 
    [pathname]);

    const goToHome = useCallback(() => {
        history.push("/");
    }, [history.push])

    const goToCategories = useCallback(() => {
        history.push("/categories");
    }, [history.push])

    const goToNotifications = useCallback(() => {
        history.push("/notifications");
    }, [history.push])

    const onClickMyAccount = useCallback(() => {
        setOpenDialogAccount(true);
    }, []);

    const onDialogkMyAccountClose = useCallback(() => {
        setOpenDialogAccount(false);
    }, []);

    return (
        <div className={classes.root}>
            <AppBar
                classes={{root: classes.appBar}}
                position="fixed"
                color="primary"
            >
                <BottomNavigation
                    classes={{ root: classes.bottomNavigation }}
                    value={currentRoute}
                >
                    <FooterItem 
                        label="Home" 
                        value="home" 
                        icon={<HomeIcon />} 
                        onClick={goToHome}
                    />
                    <FooterItem 
                        label="Categorias" 
                        value="categories" 
                        icon={<HomeIcon />} 
                        onClick={goToCategories}
                    />
                    <FooterItem 
                        label="Notificações" 
                        value="notifications" 
                        icon={<NotificationsIcon />} 
                        onClick={goToNotifications}
                    />
                    <FooterItem 
                        label="Conta" 
                        value="account" 
                        icon={<PersonIcon />} 
                        onClick={onClickMyAccount}
                    />
                </BottomNavigation>
            </AppBar>
            <DialogMyAccount 
                open={openDialogAccount}
                onClose={onDialogkMyAccountClose}
            />
        </div>
    );
}