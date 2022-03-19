import { Avatar, Typography, useTheme } from "@material-ui/core";

export const UserInformation = () => {
    const theme = useTheme();
    return (
        <>
            <Avatar src="" style={{ marginRight: theme.spacing(1) }}>
                NU
            </Avatar>
            <Typography noWrap={true}>
                Nome do usuário
            </Typography>
        </>
    );
};