import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        "& .MuiInputBase-root": {
            width: "200%",
            marginTop: 30,
            paddingLeft: 0,
        },
    },
    container: {
        display: "flex",
        justifyContent: "center",
        padding: 0,
        border: 1,
        borderColor: "red",
        borderStyle: "solid",
    },
    title: {
        marginTop: 40,
        width: "100%",
        border: 1,
        borderColor: "black",
        borderStyle: "solid",
        display: "flex",
        justifyContent: "center",
    },
    textfield: {
        marginTop: 30,
        width: 200,
    },

    add: {
        color: "green",
        width: "10%",
    },
    remove: {
        color: "red",
        width: "10%",
    },
}));

// export const styles = makeStyles((theme) => ({
//     textfield: {
//         "& .MuiTextField-root": {
//             width: "100%",
//         },
//     },
//     add: {
//         color: "green",
//     },
//     remove: {
//         color: "red",
//     },
//     button: {
//         margin: theme.spacing(3),
//         width: "15%",
//     },
// }));
