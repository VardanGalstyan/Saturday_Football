import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
// import { useTimer } from 'react-timer-hook';
import { useSelector } from 'react-redux'
import ActiveGameDeleteModal from './ActiveGameDeleteModal'
import PlayersModal from './Players/PlayersModal'
import StatusUpdateModal from './StatusUpdate/StatusUpdateModal'
import MyTimer from './MyTimer'

import Join from './StatusUpdate/Join'

function ActiveGames(props) {

    const { game } = props
    const token = localStorage.getItem('footballAccessToken')

    const join = useSelector(state => state.user.data)
    const isHost = game.host._id === join._id

    // S T A T E S
    const [modalShow, setModalShow] = useState(false)
    const [showPlayersModal, setShowPlayersModal] = useState(false)
    const [showStatusModal, setShowStatusModal] = useState(false)


    // D A T E  M E T H O D S

    const date = new Date(game.session_date).toDateString().split(' ').splice(1, 3).join(' ')
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = new Date(game.session_date);
    let dayName = days[day.getDay()];


    // H A N D L E R S


    return (
        <Container className='active-game'>
            <div className='active-game-header'>
                <span>{game.session_name}</span>
                <span>{date}</span>
            </div>
            <div className='active-game-date'>
                <span>{dayName} |</span>
                <span>{game.session_time}</span>
            </div>
            <div className='active-game-location'>
                <span>{game.session_location}</span>
            </div>
            {game.playing && <MyTimer />}
            <Join game={game} token={token} join={join} />
            <div className='active-game-created-by'>
                <div className='active-game-players'>
                    <div
                        className='active-game-badges-players'
                        onClick={() => setShowPlayersModal(true)}
                    >
                        <span>players|</span>
                        <span>{game.players.length}</span>
                    </div>
                    <div className='active-game-badges'>
                        <span>Room | </span>
                        <span>{game.session_room}</span>
                    </div>
                    <div
                        className='active-game-badges-status'
                        onClick={() => setShowStatusModal(true)}
                    >
                        <span>View</span>
                        <span>Status</span>
                    </div>
                </div>
                {isHost &&
                    <div className='active-game-buttons mt-2'>
                        <span>Edit</span>
                        <span onClick={() => setModalShow(true)}>Delete</span>
                    </div>
                }
                <span>Hosted by {game.host.full_name}</span>
            </div>
            <ActiveGameDeleteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                game={game}
                token={token}
            />
            <PlayersModal
                show={showPlayersModal}
                onHide={() => setShowPlayersModal(false)}
                players={game && game.players}
            />
            <StatusUpdateModal
                show={showStatusModal}
                onHide={() => setShowStatusModal(false)}
                game={game}
                token={token}
            />

        </Container >
    )
}

export default ActiveGames
