import { nanoid } from "nanoid"
import css from './Contacts.module.css'

export const Contacts = ({searching, deleteElement}) => {
    return (
        <>
            <ul className={css.cont_list}>
                {searching.map(({name, number}) => {
                    return (
                    <li className={css.cont_item} key={nanoid()}>
                            <p>{name}: {number}</p>
                            <button className={css.cont_btn} type="button"
                                name={name} onClick={deleteElement}>Delete</button>
                    </li>
                    )
                })}
            </ul>
        </> 
    )
}