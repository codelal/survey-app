import { useState } from "react";
import Container from "@material-ui/core/Container";
import Textfield from "@material-ui/core/Textfield";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import { IconButton } from "@material-ui/core";

const styles = makeStyles((theme) => ({
    textfield: {
        "& .MuiTextField-root": {
            width: "40%",
        },
    },
    add: {
        color: "green",
    },
    remove: {
        color: "red",
    },
    button: {
        margin: theme.spacing(3),
        width: "15%",
    },
}));

export default function CreateSurvey() {
    const classes = styles();
    const [inputFields, setInputFields] = useState([{ question: "" }]);

    const handleChange = (index, event) => {
        console.log(event.target.name);
        const values = [...inputFields];
        console.log("values before", values);
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    };

    const addQuestion = () => {
        setInputFields([...inputFields, { question: "" }]);
    };

    const removeQuestion = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        //Splice: 1-index of element we want to remove), 2- how many elemnts we want to remve, 3- adding new elements
        setInputFields(values);
    };

    const submitQuestions = (event) => {
        event.preventDefault();
        console.log(inputFields);
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

            <form className={classes.textfield}>
                {inputFields.map((inputField, index) => (
                    <div key={index}>
                        <Textfield
                            name="question"
                            label={`${index + 1}.Question `}
                            variant="outlined"
                            value={inputField.question}
                            onChange={(event) => handleChange(index, event)}
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
                    onClick={() => submitQuestions(event)}
                >
                    Save and publish
                </Button>
            </form>
        </Container>
    );
}
