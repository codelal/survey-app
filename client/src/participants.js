import axios from "./axios";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import { styles } from "./styles";
import { useParams } from "react-router";

export default function Participants() {
    let { randomString } = useParams();
    const classes = styles();
    const [error, setError] = useState(false);
    const [inputFields, setInputFields] = useState({});
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        // let abort;
        axios
            .get(`/api/questions//${randomString}`)
            .then(({ data }) => {
                if (data.success) {
                    // console.log("data in api/questions", data.rows);
                    setTitle(data.rows[0].title);
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
        setInputFields({
            ...inputFields,
            [event.target.name]: event.target.value,
        });
    };

    const submitInput = (event) => {
        event.preventDefault();
        var data = {
            objectOfAnswers: inputFields,
        };

        axios
            .post("/api/answers", data)
            .then(({ data }) => {
                if (data.success) {
                    location.replace(`/thanks/${randomString}`);
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
                        <p>
                            {index + 1}. {question.question}
                        </p>
                        <Textfield
                            name={`${question.id}`}
                            label={`${index + 1}.Answer `}
                            variant="outlined"
                            onChange={(event) => handleInput(index, event)}
                        />
                    </div>
                ))}

            <Button
                className={classes.button}
                variant="contained"
                type="submit"
                color="primary"
                onClick={(event) => submitInput(event)}
            >
                Send
            </Button>
        </Container>
    );
}
