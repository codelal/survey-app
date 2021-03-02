import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";


export default function Index() {
    return (
        <Container>
            <ThemeProvider theme={theme} >
                <Typography variant="h4">
                    Welcome to the survey-app!
                </Typography>
                <Typography variant="body1">
                    This is a free Survey-App. As a creator you can click the
                    button below and create you own survey. Than you get a link
                    and send this link to all participants. As you can use this
                    app without an account, make sure that you bookmark you
                    survey to get back to it and see you answers. Have fun!
                </Typography>
                <Link to="/create-survey">
                    <Button variant="contained" color="primary">
                        Create new survey
                    </Button>{" "}
                </Link>
            </ThemeProvider>
        </Container>
    );
}
