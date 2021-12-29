import React from 'react'
import MenuOption from './MenuOption'
import ActiveGames from './ActiveGames'
import './style.css'

function Home() {
    return (
        <div className='home'>
            <MenuOption />
            <ActiveGames />
        </div>
    )
}

export default Home
