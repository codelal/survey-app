import axios from "./axios";
import { useEffect, useState } from "react";

export default function Participants() {
    const [error, setError] = useState(false);

    //console.log(randomString);

    // useEffect(() => {
    //     // let abort;

    //     axios
    //         .get(`/api/results/${randomString}`)
    //         .then(({ data }) => {
    //             console.log("data in api/survey-results");
    //             setParticipantsUrl(`/participants/${randomString}`);
    //         })
    //         .catch((err) => {
    //             console.log("error in api/latest-users", err);
    //             setError(true);
    //         });

    //     // return () => {
    //     //     abort = true;
    //     // };
    // }, [results, participantsUrl]);

    return (
        <>
            <h1>Welcome to to survey</h1>
            
        </>
    );
}
