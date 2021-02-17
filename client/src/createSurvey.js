import { useState } from "react";
import Container from "@material-ui/core/Container";
import Textfield from "@material-ui/core/Textfield";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import { IconButton } from "@material-ui/core";

const styles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            width: "40%",
        },
    },
}));

export default function CreateSurvey() {
    const classes = styles();
    const [inputFields, setInputFields] = useState([{ question: "" }]);
    const numb = inputFields;
    console.log(numb);

    return (
        <Container>
            <h1>Your new survey</h1>
            <p>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
            </p>

            <form className={classes.root}>
                {inputFields.map((inputField, index) => (
                    <div key={index}>
                        <Textfield
                            name={index}
                            label={`${index + 1}.Question `}
                            variant="outlined"
                            value={inputField.question}
                        />
                        <IconButton>
                            <AddCircleOutlineOutlinedIcon />
                            <RemoveCircleOutlineOutlinedIcon />
                        </IconButton>
                    </div>
                ))}
            </form>
        </Container>
    );
}
