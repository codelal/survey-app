import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    typography: {
        h4: {
            fontWeight: 350,
            fontFamily: "roboto slab",
            textTransform: "uppercase",
            textAlign: "center",
        },
        h5: {
            marginBottom: 20,
            fontWeight: 350,
            fontFamily: "roboto slab",
            textTransform: "uppercase",
        },
        h6: {
            marginTop: 30,
            fontFamily: "roboto slab",
        },

        body1: {
            fontWeight: 200,
            margin: "auto",
            width: "40%",
            textAlign: "justify",
        },

        body2: {
            fontWeight: 200,
            margin: "auto",
            width: "40%",
            textAlign: "center",
            marginBottom: 30,
        },

        button: {
            textTransform: "uppercase",
            fontFamily: "roboto slab",
        },
    },
    palette: {
        primary: {
            main: "#404a86",
        },
        secondary: {
            main: "#1a746b",
        },
    },
});
