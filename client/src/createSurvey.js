import { useState } from "react";
import axios from "./axios";
import Container from "@material-ui/core/Container";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useStyles } from "./styles";
import { theme } from "./theme";


export default function CreateSurvey() {
    const classes = useStyles();
    const [error, setError] = useState("");
    const [title, setTitle] = useState("");
    const [inputFields, setInputFields] = useState([{ question: "" }]);

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    };

    const addQuestion = () => {
        setInputFields([...inputFields, { question: "" }]);
    };

    const removeQuestion = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const submitInput = (event) => {
        event.preventDefault();
        var data = {
            title: title,
            arrayOfQuestions: inputFields,
        };

        if (!data.title) {
            setError("Please make sure you added a title");
        } else if (!data.arrayOfQuestions[0].question) {
            setError("Please make sure yo added at least one question");
        } else {
            axios
                .post("/api/create-survey", data)
                .then(({ data }) => {
                    if (data.success) {
                        setError("");
                        location.replace(`/results/${data.randomString}`);
                    } else {
                        setError("Sorry, something went wrong. Try again!");
                    }
                })
                .catch((error) => {
                    console.log("error in post api/create-survey", error);
                    setError(
                        "Sorry, something went wrong. Please fill your survey out again!"
                    );
                });
        }
    };

    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Typography variant="h5" className={classes.indexTitle}>
                    Your new survey
                </Typography>
                <Typography variant="body2">
                    You can add as much questions as you want.
                    {error && <p className={classes.error}>{error}</p>}
                </Typography>

                <Textfield
                    className={classes.title}
                    name="title"
                    placeholder="Title:"
                    variant="standard"
                    onChange={(event) => handleTitle(event)}
                />
                <form className={classes.root}>
                    {inputFields.map((inputField, index) => (
                        <div key={index} className={classes.container}>
                            <Textfield
                                name="question"
                                label={`${index + 1}.Question:`}
                                variant="standard"
                                value={inputField.question}
                                onChange={(event) => handleInput(index, event)}
                            />

                            <DeleteForeverIcon
                                className={classes.remove}
                                onClick={() => removeQuestion(index)}
                                size="big"
                            />
                        </div>
                    ))}
                    <div className={classes.buttonContainer}>
                        <Button
                            className={classes.add}
                            variant="text"
                            onClick={(event) => addQuestion(event)}
                        >
                            + add question
                        </Button>
                        <Button
                            className={classes.save}
                            variant="contained"
                            size="small"
                            type="submit"
                            color="primary"
                            onClick={() => submitInput(event)}
                        >
                            Save and publish
                        </Button>
                    </div>
                </form>
            </ThemeProvider>
        </Container>
    );
}
