import axios from "./axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinkIcon from "@material-ui/icons/Link";
import { theme } from "./theme";
import { useStyles } from "./styles";

export default function Results() {
    const classes = useStyles();
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const { randomString } = useParams();

    useEffect(() => {
        // let abort;

        axios
            .get(`/api/results/${randomString}`)
            .then(({ data }) => {
                console.log(
                    "data in api/survey-results",
                    data.arrayOfQuestions,
                    data.success
                );
                if (data.success) {
                    setTitle(data.arrayOfQuestions[0].title);
                    setQuestions(data.arrayOfQuestions);
                    setAnswers(data.arrayOfAnswers);
                } else {
                    setError(true);
                }
            })
            .catch((err) => {
                console.log("error in /api/results/", err);
                setError(true);
            });

        // return () => {
        //     abort = true;
        // };
    }, []);

    return (
        <Container className={classes.parentContainer}>
            <Typography variant="h5" className={classes.title}>
                You new survey{" "}
            </Typography>
            <ThemeProvider theme={theme}>
                <Typography variant="body2" className={classes.bookmark}>
                    You should really bookmark this page!
                </Typography>
                <Button
                    className={classes.shareableLink}
                    size="small"
                    color="secondary"
                    variant="contained"
                    startIcon={<LinkIcon />}
                    onClick={() =>
                        location.replace(`/participants/${randomString}`)
                    }
                >
                    Open you shareable Link here
                </Button>{" "}
                <Typography variant="h6">
                   Titel: {title} <br />{" "}
                    {error && (
                        <p className={classes.error}>
                            Something went wrong, try again!
                        </p>
                    )}{" "}
                </Typography>
                {questions &&
                    questions.map((question, index) => (
                        <div
                            key={question.id}
                            className={classes.resultContainer}
                        >
                            <Typography
                                variant="body2"
                                className={classes.question}
                            >
                                {index + 1}. {question.question}
                            </Typography>
                            {answers &&
                                answers.map((answer, index) => (
                                    <div key={index}>
                                        {answer.id === question.id && (
                                            <Typography
                                                variant="body2"
                                                className={classes.answer}
                                            >
                                                - {answer.answer}
                                            </Typography>
                                        )}
                                    </div>
                                ))}
                            {answers.length === 0 && (
                                <Typography
                                    variant="body2"
                                    className={classes.answer}
                                >
                                    - no answer yet
                                </Typography>
                            )}
                        </div>
                    ))}
            </ThemeProvider>
        </Container>
    );
}
