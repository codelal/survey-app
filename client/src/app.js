import { BrowserRouter, Route } from "react-router-dom";
import Index from "./index";
import CreateSurvey from "./createSurvey";
import Results from "./results";
import Participants from "./participants";

export default function App() {
    return (
        <>
            <h1>Survey-App</h1>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/create-survey" component={CreateSurvey} />
                    <Route path="/results/:randomString" component={Results} />
                    <Route
                        path="/participants/:randomString"
                        component={Participants}
                    />
                </div>
            </BrowserRouter>
        </>
    );
}
