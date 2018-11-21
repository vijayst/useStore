import React, { useReducer } from 'react';
import StoreContext from './StoreContext';

export default function Store(props) {
    const [state, dispatch] = useReducer(props.rootReducer, props.initialValue);
    console.log(state);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {props.children}
        </StoreContext.Provider>
    )
}