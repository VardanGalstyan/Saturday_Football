import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ActiveGameDeleteModal from './ActiveGameDeleteModal'
import PlayersModal from './Players/PlayersModal'
import StatusUpdateModal from './StatusUpdate/StatusUpdateModal'

function ActiveGames(props) {

    const { game } = props
    const token = localStorage.getItem('footballAccessToken')



    // S T A T E S

    const [modalShow, setModalShow] = useState(false)
    const [showPlayersModal, setShowPlayersModal] = useState(false)
    const [showStatusModal, setShowStatusModal] = useState(false)
    const [join, setJoin] = useState({})

    // D A T E  M E T H O D S

    const date = new Date(game.session_date).toDateString().split(' ').splice(1, 3).join(' ')
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = new Date(game.session_date);
    let dayName = days[day.getDay()];

    // H A N D L E R S

    useEffect(() => {
        handleMeFetch()

    }, [])

    const handleMeFetch = async () => {
        const response = await fetch(`${process.env.REACT_APP_URL}/players/me`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (response.ok) {
            const data = await response.json()
            setJoin(data)
        }
    }

    const isJoined = game.players.some(player => player._id === join._id)
    const isHost = game.host._id === join._id


    const handleJoin = async () => {
        const response = await fetch(`${process.env.REACT_APP_URL}/players/me/join/${game._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        if (response.ok) {
            props.handleFetch()
        }
    }

    const handleDelete = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/players/me/${game._id}/remove`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                props.handleFetch()
            }
        } catch (error) {

        }
    }


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
            <div className='active-game-join'>
                {
                    !isJoined
                        ?
                        <span onClick={handleJoin}>JOIN</span>
                        :
                        <span onClick={handleJoin}>LEAVE</span>
                }
            </div>
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
                handleDelete={() => handleDelete()}
            />
            <PlayersModal
                show={showPlayersModal}
                onHide={() => setShowPlayersModal(false)}
                players={game && game.players}
            />
            <StatusUpdateModal
                show={showStatusModal}
                onHide={() => setShowStatusModal(false)}

            />

        </Container >
    )
}

export default ActiveGames
