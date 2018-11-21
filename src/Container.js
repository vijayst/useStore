import React, { useContext } from 'react';
import Form from './Form';
import List from './List';
import StoreContext from './StoreContext';

export default function Container() {
    let [items, dispatch] = useContext(StoreContext);

    function handleAdd(text) {
        dispatch({
            type: 'ADD_TODO',
            text
        });
    }

    function handleDelete(id) {
        dispatch({
            type: 'DELETE_TODO',
            id
        });
    }

    return (
        <div className="app">
            <Form onAdd={handleAdd} />
            <List items={items} onDelete={handleDelete} />
        </div>
    );
}