import css from './Filter.module.css'

export const Filter = ({ value, handleFilter }) => {
    return (
        <div className={css.filter_form}>
            <label className={css.filter_label}>Find contacts by name
                <input className={css.filter_input} type="text" name="filter"
                    value={value} onChange={handleFilter}></input>
            </label>
        </div>
    )
}  