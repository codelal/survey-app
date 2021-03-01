import { makeStyles } from "@material-ui/core/styles";


export const styles = makeStyles((theme) => ({
    textfield: {
        "& .MuiTextField-root": {
            width: "40%",
        },
    },
    add: {
        color: "green",
    },
    remove: {
        color: "red",
    },
    button: {
        margin: theme.spacing(3),
        width: "15%",
    },
}));
