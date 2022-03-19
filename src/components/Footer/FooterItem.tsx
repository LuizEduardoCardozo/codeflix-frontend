import { 
    BottomNavigationAction,
    BottomNavigationActionProps,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        fontWeight: 600,
        paddingBottom: 0,
        paddingTop: 0,
    },
});

export interface FooterItemProps extends BottomNavigationActionProps {};

export const FooterItem: React.FunctionComponent<FooterItemProps> = (props) => {
    const classes = useStyles();
    return <BottomNavigationAction className={classes.root} {...props} />
}