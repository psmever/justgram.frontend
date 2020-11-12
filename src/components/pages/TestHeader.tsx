import React, { useEffect} from 'react';
import { Link } from "react-router-dom";
import history from 'modules/History';

export default function TestHeader() {

    useEffect(() => {
        console.debug(history);
    }, []);

    return (
        <>
            <div>
                <ul>
                    <li><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + "/test"}>test</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + "/default"}>default</Link></li>
                </ul>
                <hr/>
            </div>

        </>
    );
}