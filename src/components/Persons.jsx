import React from "react";
import axios from "axios";

import {deletePerson} from "../services/persons.js";

const Persons = ({person}) => {

    const onDeleteHandler = async (id) => {
        await deletePerson(id)
            .then((res) => {
                alert("successfully deleted")
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <p>
                {person.name} {person.number}
                <button onClick={() => onDeleteHandler(person.id)}>delete</button>
            </p>
        </>
    );
};

export default Persons;
