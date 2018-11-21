import React from 'react';
import './app.css';
import Store from './Store';
import todoReducer from './todoReducer';
import Container from './Container';

export default function App(props) {
    return (
        <Store rootReducer={todoReducer} initialValue={[]}>
           <Container />
        </Store>
    );
}