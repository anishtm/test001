import React from 'react';
import { useSelector } from 'react-redux';

function DisplayGame() {
    const gameName=useSelector(store=>store.gameValue)
    //const playerName=useSelector(store=>store)
    return (
        <>
            <h1>This is {gameName.game}</h1>
            <h2>Player is {gameName.player}</h2>
        </>
    )
}

export default DisplayGame
