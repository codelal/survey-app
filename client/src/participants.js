import axios from "./axios";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import { styles } from "./style";
import { useParams } from "react-router";

export default function Participants() {
    let { randomString } = useParams();
    const classes = styles();
    const [error, setError] = useState(false);
    const [inputFields, setInputFields] = useState([{ answer: "" }]);
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState("");
    const [surveyId, setSurveyId] = useState();

    useEffect(() => {
        // let abort;
        axios
            .get(`/api/questions`) // add survey-id or randomstring to get questions
            .then(({ data }) => {
                if (data.success) {
                    console.log("data in api/questions", data.rows);
                    setTitle(data.rows[0].title);
                    setSurveyId(data.rows[0].survey_id);
                    setQuestions(data.rows);
                } else {
                    setError(true);
                }
            })
            .catch((err) => {
                console.log("error api/api/questions", err);
                setError(true);
            });

        // return () => {
        //     abort = true;
        // };
    }, []);

    const handleInput = (index, event) => {
        console.log(index);
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
        console.log(setInputFields);
    };

    const submitInput = (event) => {
        event.preventDefault();
        var data = {
            arrayOfAnswers: inputFields,
            surveyId: surveyId,
        };
        console.log("answers data", data);

        axios
            .post("/api/answers", data)
            .then(({ data }) => {
                if (data.success) {
                    // location.replace(`/thanks/${randomString}`);
                } else {
                    setError(true);
                }
            })
            .catch((error) => {
                console.log("error in post api/create-survey", error);
                setError(true);
            });
    };

    return (
        <Container>
            <h1>Welcome to the survey</h1>
            {error && <p>Something went wrong, try again!</p>}
            <p>Title: {title}</p>

            {questions.length &&
                questions.map((question, index) => (
                    <div key={index}>
                        <p>{question.question}</p>
                        <form className={classes.textfield}>
                            <Textfield
                                name="answer"
                                label="Answer here"
                                variant="outlined"
                                onChange={() => handleInput(index, event)}
                            />
                        </form>
                    </div>
                ))}

            <Button
                className={classes.button}
                variant="contained"
                type="submit"
                color="primary"
                onClick={() => submitInput(event)}
            >
                Send
            </Button>
        </Container>
    );
}
