import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Index() {
    return (
        <>
            <div>
                <h1>Welcome</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                </p>
                <Link to="/create-survey">
                    <Button variant="contained" color="primary">
                        Create new survey
                    </Button>{" "}
                </Link>
            </div>
        </>
    );
}
