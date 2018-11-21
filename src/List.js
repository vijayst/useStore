import React, { useState, useEffect, useContext } from 'react';
import StoreContext from './StoreContext';

export default function List() {
    const [{ todo }, dispatch] = useContext(StoreContext);

    function handleDelete(id) {
        dispatch({
            type: 'DELETE_TODO',
            id
        });
    }

    return (
        <div className="list">
            {todo.map(item => (
                <ListItem key={item.id} 
                    onDelete={handleDelete.bind(null, item.id)} 
                    text={item.text} 
                />
            ))}
        </div>
    );
}

function ListItem(props) {
    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
        if (checked) {
            const timeoutHandle = setTimeout(props.onDelete, 3000);
            return () => {
                clearTimeout(timeoutHandle);
            };
        }
    }, [checked])

    function handleCheckChange(e) {
        setChecked(e.target.checked);
    }

    const style = checked ? {
        textDecoration: 'line-through'
    } : {};

    return (
        <div className="list__item">
            <input type="checkbox" onChange={handleCheckChange} />
            <span style={style}>{props.text}</span>
        </div>
    );
}