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
            .get(`/api/questions//${randomString}`) // add survey-id or randomstring to get questions
            .then(({ data }) => {
                if (data.success) {
                    console.log("data in api/questions", data.reversedAnswers);
                    setTitle(data.reversedAnswers[0].title);
                    setSurveyId(data.reversedAnswers[0].survey_id);
                    setQuestions(data.reversedAnswers);
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
        // let values = [...inputFields];
        // console.log(index, values);
        // values[index][event.target.name] = event.target.value
        // setInputFields(values);
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
                    <div key={question.id}>
                        <p>{question.question}</p>
                        <form className={classes.textfield}>
                            <div key={index}>
                                <Textfield
                                    name={`${question.id}answer`}
                                    label={`${index + 1}.Question `}
                                    variant="outlined"
                                    value={inputFields.answer}
                                    onChange={() => handleInput(index, event)}
                                />
                            </div>
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
