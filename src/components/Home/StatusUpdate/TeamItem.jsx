import React from 'react'
import { Col } from 'react-bootstrap'

function TeamItem({ index }) {
    return (
        <Col xs={5} className='team-container'>
            <div className='team-container-header'>
                Team {index + 1}
            </div>
            <div className='team-container-players'>
                <div className='team-container-player-item'>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Col>
    )
}

export default TeamItem
