import React from 'react'
import { Col } from 'react-bootstrap'

function TeamItem({ index, players }) {
    return (
        <Col xs={5} className='team-container'>

            <div className='team-container-header'>
                Team {index + 1}
            </div>
            {players && players.map((player, index) => {
                return (
                    <div className='team-container-players'>
                        <div className='team-container-player-item'>
                            <span>{index + 1}</span>
                            <span>{player}</span>
                        </div>
                    </div>
                )
            })
            }
        </Col>
    )
}

export default TeamItem
