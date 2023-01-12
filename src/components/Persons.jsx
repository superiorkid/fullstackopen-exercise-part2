import React from "react";

const Persons = ({person}) => {
    return (
        <p>{person.name} {person.phone}</p>
    )
}

export default Persons