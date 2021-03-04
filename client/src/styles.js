import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        "& .MuiTextField-root": {
            marginTop: 20,
            width: "30%",
            marginLeft: "5%",
            // border: 1,
            // borderColor: "green",
            // borderStyle: "solid",
        },

        "& .MuiInputBase-root": {
            width: "100%",
            // border: 1,
            // borderColor: "pink",
            // borderStyle: "solid",
        },

        "& .MuiButtonBase-root": {
            // border: 1,
            // borderColor: "black",
            // borderStyle: "solid",
        },
    },

    container: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        // border: 1,
        // borderColor: "red",
        // borderStyle: "solid",
    },

    error: {
        color: "red",
    },

    title: {
        marginTop: 30,
        width: "75%",
        // border: 1,
        // borderColor: "black",
        // borderStyle: "solid",
    },

    add: {
        color: "green",
        marginTop: 20,
        textTransform: "lowercase",
        width: "20%",
        fontSize: 18,
    },

    save: {
        width: "25%",
    },

    remove: {
        color: "red",
        width: "5%",
        marginTop: 25,
    },

    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "34%",
        // border: 1,
        // borderColor: "black",
        // borderStyle: "solid",
    },
}));
