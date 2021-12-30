import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ActiveGameDeleteModal from './ActiveGameDeleteModal'
import PlayersModal from './Players/PlayersModal'
import StatusUpdateModal from './StatusUpdate/StatusUpdateModal'

function ActiveGames() {

    const [modalShow, setModalShow] = useState(false)
    const [showPlayersModal, setShowPlayersModal] = useState(false)
    const [showStatusModal, setShowStatusModal] = useState(false)
    const [join, setJoin] = useState(false)
    const [host, setHost] = useState(false)

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
                <span>EPH SPORTS CENTER</span>
            </div>
            <div className='active-game-join'>
                {
                    !join
                        ?
                        <span>JOIN</span>
                        :
                        <span>LEAVE</span>
                }
            </div>
            <div className='active-game-created-by'>
                <div className='active-game-players'>
                    <div
                        className='active-game-badges-players'
                        onClick={() => setShowPlayersModal(true)}
                    >
                        <span>players|</span>
                        <span>8</span>
                    </div>
                    <div className='active-game-badges'>
                        <span>Room | </span>
                        <span>6</span>
                    </div>
                    <div
                        className='active-game-badges-status'
                        onClick={() => setShowStatusModal(true)}
                    >
                        <span>View</span>
                        <span>Status</span>
                    </div>
                </div>
                {host &&
                    <div className='active-game-buttons mt-2'>
                        <span>Edit</span>
                        <span onClick={() => setModalShow(true)}>Delete</span>
                    </div>
                }
                <span>Hosted by Vahag Rapyan</span>
            </div>
            <ActiveGameDeleteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <PlayersModal
                show={showPlayersModal}
                onHide={() => setShowPlayersModal(false)}
            />
            <StatusUpdateModal
                show={showStatusModal}
                onHide={() => setShowStatusModal(false)}
            />

        </Container>
    )
}

export default ActiveGames
