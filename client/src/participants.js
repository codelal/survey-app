import axios from "./axios";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import { styles } from "./style";
import { useParams } from "react-router";

export default function Participants() {
    const classes = styles();
    const [error, setError] = useState(false);
    const [inputFields, setInputFields] = useState([{ answer: "" }]);
    let { randomString } = useParams();
    //console.log(randomString);

    useEffect(() => {
        // let abort;

        axios
            .get(`/api/questions`)
            .then(({ data }) => {
                console.log("data in api/survey-results", data);
               


            })
            .catch((err) => {
                console.log("error in api/latest-users", err);
                setError(true);
            });

        // return () => {
        //     abort = true;
        // };
    }, []);

    return (
        <Container>
            <h1>Welcome to the survey</h1>
            {error && <p>Something went wrong, try again!</p>}
            <form className={classes.textfield}>
                {inputFields.map((inputField, index) => (
                    <div key={index}>
                        <Textfield
                            name="answer"
                            label="Question"
                            variant="outlined"
                            value={inputField.answer}
                            onChange={() => handleChange(index, event)}
                        />
                    </div>
                ))}
                <Button
                    className={classes.button}
                    variant="contained"
                    type="submit"
                    color="primary"
                    onClick={() => submitAnswers(event)}
                >
                    Send
                </Button>
            </form>
        </Container>
    );
}
