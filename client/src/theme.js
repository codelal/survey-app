import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const theme = createMuiTheme({
    typography: {
        h4: {
            marginBottom: 40,
            marginTop: "12%",
            fontWeight: 350,
            fontFamily: "roboto slab",
            textTransform: "uppercase",
        },
        h5: {
            marginBottom: 20,
            marginTop: "12%",
            fontWeight: 350,
            fontFamily: "roboto slab",
            textTransform: "uppercase",
        },

        body1: {
            fontWeight: 200,
            margin: "auto",
            width: "40%",
            textAlign: "justify",
        },
        button: {
            marginTop: 50,
            textTransform: "uppercase",
            border: "10 solid black",
            fontFamily: "roboto slab",
        },
      
    },
    palette: {
        primary: {
            main: "#404a86",
        },
    },
    // overrides: {
    //     MuiTextField: {
    //         // Name of the rule
    //         root: {
    //             // Some CSS
    //             marginTop: 30,
    //             width: "100%",
    //         },
    //     },
    // },
});
