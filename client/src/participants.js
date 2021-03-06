import axios from "./axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "@material-ui/core/Container";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { useStyles } from "./styles";
import { theme } from "./theme";
const defaultError = "Something went wrong, try again";

export default function Participants() {
    const classes = useStyles();
    let { randomString } = useParams();
    const [error, setError] = useState("");
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
                    setError(defaultError);
                }
            })
            .catch((err) => {
                console.log("error api/api/questions", err);
                setError(defaultError);
            });

        // return () => {
        //     abort = true;
        // };
    }, []);

    const handleInput = (index, event) => {
        setError("");
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
        console.log("data", data.objectOfAnswers, questions.length);

        if (Object.keys(data.objectOfAnswers).length === questions.length) {
            axios
                .post("/api/answers", data)
                .then(({ data }) => {
                    if (data.success) {
                        setError("");
                        location.replace(`/thanks/${randomString}`);
                    } else {
                        setError(defaultError);
                    }
                })
                .catch((error) => {
                    console.log("error in post api/create-survey", error);
                    setError(defaultError);
                });
        } else {
            setError("Make sure you answered all questions! :)");
        }
    };

    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Typography variant="h5" className={classes.indexTitle}>
                    Welcome to the survey{" "}
                </Typography>
                {error && <p className={classes.error}>{error}</p>}
                <Typography variant="body2">
                    Pleas eanswer the questions below. You participation is
                    fully anonymous. Thank you for you time!
                </Typography>
                <Typography variant="h6">Title: {title}</Typography>
                {questions.length &&
                    questions.map((question, index) => (
                        <div key={question.id} className={classes.root}>
                            <Typography
                                variant="body2"
                                className={classes.particpiantQuestions}
                            >
                                {" "}
                                {index + 1}. {question.question}
                            </Typography>

                            <Textfield
                                name={`${question.id}`}
                                label={`${index + 1}.Answer `}
                                variant="outlined"
                                onChange={(event) => handleInput(index, event)}
                            />
                        </div>
                    ))}

                <Button
                    className={classes.indexButton}
                    variant="contained"
                    type="submit"
                    color="primary"
                    endIcon={<SendIcon />}
                    onClick={(event) => submitInput(event)}
                >
                    Send
                </Button>
            </ThemeProvider>
        </Container>
    );
}
