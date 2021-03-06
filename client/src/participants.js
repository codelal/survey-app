import axios from "./axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "@material-ui/core/Container";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import SendIcon from "@material-ui/icons/Send";
import { useStyles } from "./styles";
import { theme } from "./theme";

export default function Participants() {
    const classes = useStyles();
    let { randomString } = useParams();
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
            <ThemeProvider theme={theme}>
                <Typography variant="h5" className={classes.indexTitle}>
                    Welcome to the survey{" "}
                </Typography>
                {error && (
                    <p className={classes.error}>
                        Something went wrong, try again!
                    </p>
                )}
                <Typography variant="body2">
                    Pleas eanswer the questions below. You participation is fully
                    anonymous. Thank you for you time!
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
