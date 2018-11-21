import React from 'react';
import './app.css';
import Store from './Store';
import rootReducer from './rootReducer';
import Container from './Container';

console.log(rootReducer);

export default function App(props) {
    return (
        <Store rootReducer={rootReducer}>
           <Container />
        </Store>
    );
}