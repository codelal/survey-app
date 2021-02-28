import axios from "./axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Results() {
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
        <>
            <h1>You new survey</h1>
            <p>You should really bookmark this page</p>
            <Link to={`/participants/${randomString}`}>
                Open you shareable Link here
            </Link>
            {error && <p>Something went wrong, try again!</p>}
            <h2>Results for: {title}</h2>
            {questions &&
                questions.map((question, index) => (
                    <div key={question.id}>
                        <p>
                            {index + 1}. {question.question}
                        </p>
                        {answers &&
                            answers.map((answer, index) => (
                                <div key={index}>
                                    {answer.id === question.id && (
                                        <p>
                                            User{answer.participant} answers: {answer.answer} 
                                        </p>
                                    )}
                                </div>
                            ))}
                    </div>
                ))}
        </>
    );
}
