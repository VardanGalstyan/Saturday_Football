import React, { useEffect, useState } from 'react'
import ActiveGames from './ActiveGames'
import NewGame from './CreateGame/NewGame'
import './style.css'
import MainPitch from '../Pitch/MainPitch'

function Home() {

    const [activeGames, setActiveGames] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)



    useEffect(() => {
        handleActiveFetch()
    }, [])

    const handleActiveFetch = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`${process.env.REACT_APP_URL}/sessions`)
            if (response) {
                const data = await response.json()
                setActiveGames(data)
                setIsLoading(false)
            } else {
                setError(true)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='home'>
            {activeGames && activeGames.map(game => (
                <ActiveGames
                    key={game._id}
                    game={game}
                    handleFetch={() => handleActiveFetch()}
                />
            ))}
            <NewGame handleFetch={() => handleActiveFetch()} />
            {/* <MainPitch /> */}
        </div>
    )
}

export default Home
