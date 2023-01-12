import React, {useState, useEffect} from "react";
import "./App.css";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx";
import axios from "axios";
import {getPersons, postPerson} from './services/persons'

function App() {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState({
        id: new Date(),
        name: "",
        number: "",
    });
    const [fil, setFilter] = useState("");

    useEffect(() => {
        const getPerson = async () => {
            await getPersons()
                .then((response) => {
                    setPersons(response.data);
                });
        };

        getPerson();
    }, [persons]);

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setNewName((prevState) => ({...newName, [name]: value}));
    };

    const filterHandler = (data) => {
        setFilter(data);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const isExists = persons.filter(
            (predicate) => predicate.name === newName.name
        );

        if (isExists.length > 0) {
            alert(`${newName.name} is already added to phonebook`);
        } else {
            await postPerson(newName)
                .then((response) => {
                    alert("data successfully added.");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };


    return (
        <>
            <h1>PhoneBook</h1>
            <Filter onFilterTrigger={filterHandler}/>

            <h2>Add a new</h2>
            <PersonForm
                handleSubmit={onSubmitHandler}
                handleChange={onChangeHandler}
            />

            <h2>Numbers</h2>
            {fil
                ? persons
                    .filter((predicate) => predicate.name.includes(fil))
                    .map((person, index) => <Persons key={person.id} person={person}/>)
                : persons.map((person, index) => (
                    <Persons key={person.id} person={person}/>
                ))}
        </>
    );
}

export default App;
