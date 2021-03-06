import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { useStyles } from "./styles";

export default function Index() {
    const classes = useStyles();
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Typography className={classes.indexTitle} variant="h4">
                    Survey-App
                </Typography>
                <Typography variant="body1">
                    This is a free Survey-App. As a creator you can click the
                    button below and create your own survey. Than you get a link
                    and send this link to you participants. As you can use this
                    app without an account, make sure that you bookmark you
                    survey to get back to it and see you answers. Have fun!
                </Typography>
                <Button
                    className={classes.indexButton}
                    variant="contained"
                    color="primary"
                    href="/create-survey"
                >
                    Create new survey
                </Button>{" "}
            </ThemeProvider>
        </Container>
    );
}
