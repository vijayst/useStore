import React from 'react';
import './app.css';
import Store from './Store';
import rootReducer from './rootReducer';
import Container from './Container';


export default function App() {
    return (
        <Store rootReducer={rootReducer}>
           <Container />
        </Store>
    );
}