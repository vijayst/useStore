import React, { useState, useContext } from 'react';
import StoreContext from './StoreContext';

export default function Form(props) {
    const [value, setValue] = useState('');
    const [state, dispatch] = useContext(StoreContext);

    function handleAdd(e) {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            text: value
        });
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <form>
            <input 
                type="text" 
                placeholder="Add Todo" 
                value={value} 
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
        </form>
    );
}