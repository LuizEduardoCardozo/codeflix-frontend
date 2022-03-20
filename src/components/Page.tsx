import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: (props: PageProps) => ({
        height: 'inherit',
        paddingTop: props.margin === "normal" ? 48 : 62,

        [theme.breakpoints.between("sm", "md")]: {
            paddingTop: props.margin === "normal" ? 48 : 62,
        },

        [theme.breakpoints.up("md")]: {
            paddingTop: props.margin === "normal" ? 62 : 80,
        },
        "&::after": {
            [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
                display: "block",
                content: '""',
                paddingTop: 100,
            },
        },
    }),
}));

interface PageProps {
    classes?: {
        root?: any
    };
    margin?: "normal" | "large";
}

export const Page: React.FC<PageProps> = (props) => {
    const { classes: propClasses = {}, margin = "normal" } = props;
    const classes = useStyles({ classes: propClasses, margin });
    const classRoot = clsx(classes.root, propClasses.root);
    return <div className={classRoot}>{props.children}</div>
}