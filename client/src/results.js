import axios from "./axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Results() {
    const [error, setError] = useState(false);
    const [results, setResults] = useState([]);
    const [participantsUrl, setParticipantsUrl] = useState("");
    let { randomString } = useParams();

    //console.log(randomString);

    useEffect(() => {
        // let abort;

        axios
            .get(`/api/results/${randomString}`)
            .then(({ data }) => {
                console.log("data in api/survey-results", data);
                setParticipantsUrl(`/participants/${randomString}`);
            })
            .catch((err) => {
                console.log("error in api/latest-users", err);
                setError(true);
            });

        // return () => {
        //     abort = true;
        // };
    }, [results, participantsUrl]);

    return (
        <>
            <h1>You new survey</h1>
            <p>You should really bookmark this page</p>
            <Link to={participantsUrl}>Open you shareable Link here</Link>
            <h2>Results</h2>
            {results &&
                results.map((result) => (
                    <div key={result.id}>{result.question}</div>
                ))}
        </>
    );
}
