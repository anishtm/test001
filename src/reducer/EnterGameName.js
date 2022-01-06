import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function EnterGameName() {
    const dispatch = useDispatch()
    const [gameName, setgameName] = useState('')
    const [playerName, setplayerName] = useState('')

    const changeName=()=>{
        dispatch({type:'CHANGE_GAME_NAME',payload:gameName})
    }
    const changePlayerName=()=>{
        dispatch({type:'CHANGE_PLAYER_NAME',payload:playerName})
    }
    return (
        <>
            <h2>Enter Game Name</h2>
            <input type="text" placeholder="Enter your game name" onChange={(e)=>{setgameName(e.target.value)} }/>

            <button onClick={changeName}>Change Game Name</button>
            <br />
            <input type="text" placeholder="Enter your player name" onChange={(e)=>{setplayerName(e.target.value)} }/>

            <button onClick={changePlayerName}>Change Player Name</button>
        </>
    )
}

export default EnterGameName
