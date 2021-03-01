import { BrowserRouter, Route } from "react-router-dom";
//import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Index from "./index";
import CreateSurvey from "./createSurvey";
import Results from "./results";
import Participants from "./participants";
import Thanks from "./thanks";

export default function App() {
    return (
        <>
            <Typography variant="h5">Survey-App</Typography>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/create-survey" component={CreateSurvey} />
                    <Route path="/results/:randomString" component={Results} />
                    <Route
                        path="/participants/:randomString"
                        component={Participants}
                    />
                    <Route path="/thanks/:randomString" component={Thanks} />
                </div>
            </BrowserRouter>
        </>
    );
}
