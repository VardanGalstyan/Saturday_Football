import React from 'react'

function TeamSingleItem(props) {

    const dragStart = (e) => {

        e.dataTransfer.setData('member_id', e.target.id)
        e.dataTransfer.setData('container_from', e.target.parentNode.id)
        e.target.style.opacity = "0.4"
    }

    const dragOver = (e) => {
        e.target.style.opacity = "1"
        e.stopPropagation()
    }


    return (
        <div
            className='team-player-item'
            id={props.id}
            draggable='true'
            onDragStart={dragStart}
            onDragEnd={dragOver}
        >
            <span className='single-player'>{` ${props.index + 1} ${props.player}`}</span>
        </div>
    )
}

export default TeamSingleItem
