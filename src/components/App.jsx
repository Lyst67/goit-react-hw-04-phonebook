import React, { useState ,useEffect} from "react";
import  {Form}  from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { nanoid } from "nanoid"
const LS_KEY = "contacts"

export const App = () => {
  const [contacts, setContacts] = useState(() => {
      return JSON.parse(localStorage.getItem(LS_KEY))
    ?? []})
  
   const [filter, setFilter] = useState("")
 
  const formSubmitHandler = data => {
    const newContacts = { id: nanoid(), ...data, }
    console.log(newContacts.name)
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



