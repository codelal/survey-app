import { useState } from "react";
import axios from "./axios";
import Container from "@material-ui/core/Container";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import { IconButton } from "@material-ui/core";
import { styles } from "./styles";
import { theme } from "./theme";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";

export default function CreateSurvey() {
    const classes = styles();
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
        console.log("s", data.arrayOfQuestions[0].question);

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
                        setError(
                            "Sorry, something went wrong. Please fill your survey out again!"
                        );
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
                <Typography variant="h5">Your new survey</Typography>
                <Typography variant="body1">
                    Create you new servey here. You can add as much questions as
                    you want.
                </Typography>
                {error && <p>{error}</p>}
                <Textfield
                    name="title"
                    label="Title"
                    variant="outlined"
                    onChange={() => handleTitle(event)}
                />
                <form className={classes.textfield}>
                    {inputFields.map((inputField, index) => (
                        <div key={index}>
                            <Textfield
                                name="question"
                                label={`${index + 1}.Question `}
                                variant="outlined"
                                value={inputField.question}
                                onChange={() => handleInput(index, event)}
                            />
                            <IconButton
                                className={classes.add}
                                onClick={() => addQuestion()}
                            >
                                <AddCircleOutlineOutlinedIcon />{" "}
                            </IconButton>
                            <IconButton
                                className={classes.remove}
                                onClick={() => removeQuestion(index)}
                            >
                                <RemoveCircleOutlineOutlinedIcon />
                            </IconButton>
                        </div>
                    ))}
                    <Button
                        className={classes.button}
                        variant="contained"
                        type="submit"
                        color="primary"
                        onClick={() => submitInput(event)}
                    >
                        Save and publish
                    </Button>
                </form>
            </ThemeProvider>
        </Container>
    );
}
