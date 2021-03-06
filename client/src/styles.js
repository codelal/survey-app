import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        "& .MuiTextField-root": {
            marginLeft: "3%",
            marginTop: 20,
            width: "35%",
            // border: 1,
            // borderColor: "green",
            // borderStyle: "solid",
        },

        "& .MuiInputBase-root": {
            width: "100%",
            marginRight: "10%",
            // border: 1,
            // borderColor: "pink",
            // borderStyle: "solid",
        },

        "& .MuiButtonBase-root": {
            // border: 1,
            // borderColor: "black",
            // borderStyle: "solid",
        },

        "& .MuiSvgIcon-root": {
            marginTop: 42,
            marginLeft: 10,
            padding: 0,
            cursor: "pointer",
            //  border: 1,
            // borderColor: "black",
            // borderStyle: "solid",
        },
    },

    indexTitle: {
        marginBottom: 30,
        marginTop: "12%",
    },

    indexButton: {
        marginTop: "5%",
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
        color: "#a31545",
    },

    title: {
        width: "60%",
        // border: 1,
        // borderColor: "black",
        // borderStyle: "solid",
    },

    add: {
        color: "#1a746b",
        marginTop: 20,
        marginLeft: "57.5%",
        textTransform: "lowercase",
        width: 140,
        fontSize: 18,
    },

    save: {
        marginTop: 30,
        maxWidth: 160,
        marginLeft: "55%",
    },

    remove: {
        width: "5%",
        marginTop: 25,
        color: "#a31545",
        cursor: "initial",
    },

    buttonContainer: {
        display: "flex",
        flexDirection: "column",

        // border: 1,
        // borderColor: "black",
        // borderStyle: "solid",
    },

    resultContainer: {
        width: "90%",
    },

    bookmark: {
        border: 3,
        borderColor: "#ffd54f",
        borderStyle: "solid",
        // backgroundColor: "#ffd54f",
        borderRadius: 5,
        padding: 6,
        fontWeight: "bold",
        marginBottom: 10,
        
    },

    shareableLink: {
        marginTop: "3%",
    },

    question: {
        textAlign: "left",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
    },

    // answerContainer: {
    //     border: 1,
    //     borderColor: "black",
    //     borderStyle: "solid",
    //     width: "50%",

    // },

    answer: {
        textAlign: "left",
        marginBottom: 3,
    },
}));
