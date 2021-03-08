import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        "& .MuiTextField-root": {
            marginLeft: "3%",
            marginTop: "1%",
            width: "40%",
            winWidth: "20%",

            // border: 1,
            // borderColor: "green",
            // borderStyle: "solid",
        },

        "& .MuiInputBase-root": {
            width: "100%",
            marginRight: "10%",
            marginBottom: "2%",
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
        marginTop: 120,
    },

    indexButton: {
        marginTop: 30,
    },

    title: {
        marginTop: 110,
        marginBottom: 30,
    },

    questionsContainer: {
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

    surveyTitle: {
        width: "60%",
    },

    remove: {
        width: "5%",
        marginTop: 25,
        color: "#a31545",
        cursor: "initial",
    },

    buttonContainer: {
        display: "grid",
        justifyContent: "center",
        // border: 1,
        // borderColor: "green",
        // borderStyle: "solid",
    },

    add: {
        color: "#1a746b",
        marginTop: 5,
        textTransform: "lowercase",
        width: 160,
        fontSize: 18,
    },

    save: {
        marginTop: 40,
        width: 160,
        minWidth: 140,
    },

    bookmark: {
        border: 1,
        borderColor: "secondary",
        borderStyle: "solid",
        backgroundColor: "#ffd54f",
        borderRadius: 5,
        padding: 6,

        width: 250,
        fontWeight: "bold",
        marginBottom: "3%",
        fontSize: 13,
    },

    shareableLink: {
        marginBottom: "1%",
    },

    question: {
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 25,
        maxWidth: 450,
        //width: "fit-content",
        // border: 1,
        // borderColor: "red",
        // borderStyle: "solid",
    },

    answer: {
        textAlign: "justify-all",
        marginBottom: 3,
        maxWidth: 450,
    },

    participantsInfo: {
        marginBottom: "5%",
    },

    particpiantsQuestions: {
        marginTop: 15,
        marginBottom: 0,
        fontWeight: "bold",

        // border: 1,
        // borderColor: "red",
        // borderStyle: "solid",
    },
}));
