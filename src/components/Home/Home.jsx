import './style.css'
import React from 'react'
import { useSelector } from 'react-redux'
import ActiveGames from './ActiveGames'
import NewGame from './CreateGame/NewGame'
// import MainPitch from '../Pitch/MainPitch'

function Home() {

    const activeGames = useSelector(state => state.sessions.data)



    return (
        <div className='home'>
            {activeGames && activeGames.map(game => <ActiveGames key={game._id} game={game} />)}
            <NewGame />
            {/* <MainPitch /> */}
        </div>
    )
}

export default Home
