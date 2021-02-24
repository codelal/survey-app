import { useState } from "react";
import axios from "./axios";
import Container from "@material-ui/core/Container";
import Textfield from "@material-ui/core/Textfield";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import { IconButton } from "@material-ui/core";
import { styles } from "./style";


export default function CreateSurvey() {
    const classes = styles();
    const [error, setError] = useState(false);
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
       
        axios
            .post("/api/create-survey", data)
            .then(({ data }) => {
                if (data.success) {
                    location.replace(`/results/${data.randomString}`);
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
            <h1>Your new survey</h1>
            <p>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
            </p>
            {error && <p>Something went wrong, try again!</p>}
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
        </Container>
    );
}
