import { BrowserRouter, Route } from "react-router-dom";
import Index from "./index";
import CreateSurvey from "./createSurvey";

export default function Creators() {
    return (
        <>
            <h1>survey-app: creators-view</h1>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/create-survey" component={CreateSurvey} />
                </div>
            </BrowserRouter>
        </>
    );
}
