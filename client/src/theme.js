import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
    typography: {
        h4: {
            marginBottom: 30,
            marginTop: 50,
        },
        body1: {
            fontWeight: 200,
            marginBottom: 30,
        },
        button: {
            fontStyle: "italic",
        },
    },
});

export default theme;
