import React from 'react';
import { Link } from "react-router-dom";

export default function MainHeader() {
    return (
        <>
            <div>
                <div>Main Header</div>
                <ul>
                    <li><Link to={process.env.PUBLIC_URL + "/main/test"}>test</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + "/main/default"}>default</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + "/etc/test"}>etc-default</Link></li>
                </ul>
                <hr/>
            </div>

        </>
    );
}