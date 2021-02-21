import React from "react";

export default ({user}) => (
    <li>
        <span> FirstName: {user.firstName}; </span>
        <span> LastName: {user.lastName}; </span>
        <span> FullName: {user.firstName + ' ' + user.lastName}; </span>
        <span> Age: {user.age + 5}; </span>
        <span> Job: {user.job}; </span>
    </li>
)