import { AppBar, BottomNavigation, makeStyles } from "@material-ui/core";
import { FooterItem } from "./FooterItem";

import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";

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
    
    return (
        <div className={classes.root}>
            <AppBar
                classes={{root: classes.appBar}}
                position="fixed"
                color="primary"
            >
                <BottomNavigation
                    classes={{ root: classes.bottomNavigation }}
                >
                    <FooterItem label="Home" value="home" icon={<HomeIcon />} />
                    <FooterItem label="Notificações" value="notifications" icon={<NotificationsIcon />} />
                    <FooterItem label="Conta" value="account" icon={<PersonIcon />} />
                </BottomNavigation>
            </AppBar>
        </div>
    );
}