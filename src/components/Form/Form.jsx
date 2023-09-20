
import React, { useState } from 'react';
import css from './Form.module.css'

export const Form = ({onSubmitForm}) => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
 

      const handleContactChange = (event) => {
        const {name, value } = event.currentTarget
        if (name === "name") {
          setName(value)
        }
        if (name === "number") {
          setNumber(value)
        }
        
      }
     const handleSubmit = (event) => {
       event.preventDefault()
       onSubmitForm({name, number });
      reset()
      }
     const reset = () => {
       setName("")
       setNumber("")
      }
      return (
        <form className={css.form_thumb} onSubmit={handleSubmit}>
        <label htmlFor="" className={css.form_label}>Name
              <input className={css.form_input} type="text" name="name" value={name} onChange={handleContactChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name"
                required
              />
            </label>
            <label htmlFor="" className={css.form_label}>Number
              <input className={css.form_input} type="tel" name="number" value={number} onChange={handleContactChange}
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number"
                required
              />
            </label>
        <button type="submit" className={css.form_btn}>Add contact</button>
        </form> 
      ) 
}


