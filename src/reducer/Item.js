import React from 'react';
import { useDispatch } from 'react-redux';

function Item() {
    const dispatch = useDispatch();

    const addItem = () => (
        dispatch({ type: 'ADD_ITEM' })
    )
    const removeItem = () => (
        dispatch({ type: 'R_ITEM' })
    )
    return (
        <>
            <h3>Item component</h3>
            <button onClick={addItem}>Add component</button>
            <button onClick={removeItem}>Remove component</button>
        </>
    )
}

export default Item;
