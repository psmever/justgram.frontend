import React from 'react';
import { Link } from "react-router-dom";

export default function EtcHeader() {
    return (
        <>
            <div>
                <div>Etc Header</div>
                <ul>
                    <li><Link to={process.env.PUBLIC_URL + "/etc/test"}>test</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + "/etc/default"}>default</Link></li>

                    <li><Link to={process.env.PUBLIC_URL + "/main/default"}>main - default</Link></li>
                </ul>
                <hr/>
            </div>

        </>
    );
}