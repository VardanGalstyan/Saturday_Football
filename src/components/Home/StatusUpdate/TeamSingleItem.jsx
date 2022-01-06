import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function TeamSingleItem(props) {

    const { player, index } = props

    return (
        <Draggable draggableId={player.id.toString()} index={index}>
            {(provided) => (
                <div
                    className='team-player-item'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} 
                // ref={provided.innerRef}
                >
                    <span className='single-player' >
                        {` ${index + 1} ${player.name}`}
                    </span>
                </div>
            )}
        </Draggable>
    )
}

export default TeamSingleItem
