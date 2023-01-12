import axios from "axios";

const baseURI = 'http://localhost:3001/persons'

const getPersons = () => {
    return axios.get(baseURI)
}

const postPerson = data => {
    return axios.post(baseURI, data)
}

const deletePerson = id => {
    return axios.delete(`${baseURI}/${id}`)
}

export {
    getPersons, deletePerson, postPerson
}