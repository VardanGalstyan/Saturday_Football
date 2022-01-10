import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fillSessionData } from '../../../Redux/Actions/actions'
import { ClockLoader } from "react-spinners";



function Join({ game, token, join }) {

    const isJoined = game.players.some(player => player._id === join._id)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    const handleJoin = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${process.env.REACT_APP_URL}/players/me/join/${game._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                dispatch(fillSessionData())
                setIsLoading(false)
            } else {
                throw Error
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='active-game-join'>
            {
                isLoading ?
                    <ClockLoader color={"#fff"} size={25} /> :
                    <>
                        {
                            !isJoined
                                ?
                                <span onClick={handleJoin}>JOIN</span>
                                :
                                <span onClick={handleJoin}>LEAVE</span>
                        }
                    </>
            }
        </div>
    )
}

export default Join
