import { useState } from 'react'
import './App.css'
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx";

function App() {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }

    ])
    const [newName, setNewName] = useState({
        id: persons.length + 1,
        name: "",
        phone: ""
    })
    const [fil, setFilter] = useState("")

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setNewName((prevState) => ({...newName, [name]: value}))
    }

    const filterHandler = (data) => {
        setFilter(data)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const isExists = persons.filter((predicate) => predicate.name === newName.name)

        if (isExists.length > 0) {
            alert(`${newName.name} is already added to phonebook`)
        } else {
            setPersons((prevState) => [...persons, newName])
        }

    }

    return (
      <>
        <h1>PhoneBook</h1>
          <Filter onFilterTrigger={filterHandler} />

          <h2>Add a new</h2>
          <PersonForm handleSubmit={onSubmitHandler} handleChange={onChangeHandler} />

          <h2>Numbers</h2>
          {fil ? (
              persons.filter((predicate) => predicate.name.includes(fil)).map((person,index) => (
                  <Persons key={person.id} person={person} />
              ))
          ) : (
              persons.map((person, index) => (
                  <Persons key={person.id} person={person} />
              ))
          )}
      </>
    )
}

export default App
