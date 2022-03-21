import { Slide, useScrollTrigger } from "@material-ui/core";
import { useSmallWindow } from "../../hooks/useSmallWindow";

export const HideOnScroll: React.FunctionComponent = (props) => {
    const { children } = props;
    const isSmallWindow = useSmallWindow();
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!isSmallWindow || !trigger}>
            {children as any}
        </Slide>
    )
}