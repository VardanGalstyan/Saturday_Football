import React from 'react'
import MenuOption from './MenuOption'
import ActiveGames from './ActiveGames'
import NewGame from './CreateGame/NewGame'
import './style.css'
import MainPitch from '../Pitch/MainPitch'

function Home() {
    return (
        <div className='home'>
            {/* <MenuOption />
            <ActiveGames />
            <NewGame /> */}
            <MainPitch />
        </div>
    )
}

export default Home
