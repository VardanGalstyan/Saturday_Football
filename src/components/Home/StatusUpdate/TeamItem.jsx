import React from 'react'
import { Col } from 'react-bootstrap'
import { Droppable } from 'react-beautiful-dnd'
import TeamSingleItem from './TeamSingleItem'

function TeamItem(props) {

    return (
        <Col xs={5} className='team-container'>
            <div className='team-container-header' >
                Team {props.index + 1}
            </div>
            <Droppable droppableId={props.id} >
                {provided => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className='team-list'
                    >


                        {props.team.map((player, index) => (
                            <TeamSingleItem
                                key={player.id}
                                index={index}
                                player={player}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Col >
    )
}

export default TeamItem
