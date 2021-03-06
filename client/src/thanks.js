import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { theme } from "./theme";
import { useStyles } from "./styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import pink from "@material-ui/core/colors/pink";

export default function Thanks() {
    const classes = useStyles();
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Typography variant="h5" className={classes.indexTitle}>
                    Thank you for participation!{" "}
                </Typography>
                <FavoriteBorderIcon
                    fontSize="large"
                    style={{ color: pink [700] }}
                />
            </ThemeProvider>
        </Container>
    );
}
