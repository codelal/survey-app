import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Index() {
    return (
        <>
            <Typography variant="h3">
                Welcome
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
            </Typography>
            <Link to="/create-survey">
                <Button variant="contained" color="primary">
                    Create new survey
                </Button>{" "}
            </Link>
        </>
    );
}
