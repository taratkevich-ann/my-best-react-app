import React from "react";

export default ({ user }) => (
    <li>
        <div>
            <span>Name: {user.name}</span>
            <span>Age: {user.age}</span>
        </div>
    </li>
);