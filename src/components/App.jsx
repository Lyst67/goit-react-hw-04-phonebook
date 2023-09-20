import React, { useState ,useEffect} from "react";
import  {Form}  from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { nanoid } from "nanoid"
const LS_KEY = "contacts"

export const App = () => {
  const [contacts, setContacts] = useState([
       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ])
   const [filter, setFilter] = useState("")
 
  const formSubmitHandler = data => {
    const newContacts = {id: nanoid(), ...data, }
    const existElem = contacts.find((elem) =>
      elem.name === newContacts.name)
    if (existElem) {
      alert(`${data.name} is already in contacts`)
      return
    }
     setContacts(prevState => (
     [newContacts, ...prevState])) 
  }

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(LS_KEY))
    setContacts(savedContacts ?? "")
  }, [])

  useEffect(() => {
    console.log('Up')
    localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }, [contacts])

  const handleFilter = (event) => {
    const value = event.target.value
    setFilter(value)
  }

  const filterContacts = () => {
return contacts.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
  }
  
  const deleteElement = ({ target: { name } }) => {
      setContacts(prevState => (
       prevState.filter((contact) => contact.name !== name)
      ))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmitForm={formSubmitHandler}
           />
      <h2>Contacts</h2>
      <Filter value={filter}
         handleFilter={handleFilter}
       />
      <Contacts
        deleteElement={deleteElement}
        searching={filterContacts()}
      />
     
    </div>
  );
}



