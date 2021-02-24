import axios from "./axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Results() {
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [results, setResults] = useState([]);
    const { randomString } = useParams();

    useEffect(() => {
        // let abort;

        axios
            .get(`/api/results/${randomString}`)
            .then(({ data }) => {
                console.log("data in api/survey-results", data.success);
                if (data.success) {
                    setResults(data.rows);
                    setTitle(data.rows[0].title);
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
            {results &&
                results.map((result, index) => (
                    <div key={result.id}>
                        <p>
                            {index + 1}. {result.question}
                        </p>
                        <p>{result.answer}</p>
                    </div>
                ))}
        </>
    );
}
