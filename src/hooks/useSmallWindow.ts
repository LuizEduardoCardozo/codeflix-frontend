import { useMediaQuery, useTheme } from "@material-ui/core";

export const useSmallWindow = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(
        theme.breakpoints.values.mobile
    ));
};