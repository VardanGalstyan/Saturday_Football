import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function ActiveGames() {
    return (
        <Container className='active-game'>
            <div className='active-game-header'>
                <span>Active Games</span>
                <span>27 May 2022</span>
            </div>
            <div className='active-game-date'>
                <span>SATURDAY |</span>
                <span>19:00</span>
            </div>
            <div className='active-game-location'>
                <span>Location: EPH SPORTS CENTER</span>
            </div>
            <div className='active-game-players'>
                <span>Players: 8</span>
            </div>
            <div className='active-game-players'>
                <span>Room #: 6</span>
            </div>
            <div className='active-game-created-by'>
                <span>Vahag Rapyan</span>
            </div>

        </Container>
    )
}

export default ActiveGames
