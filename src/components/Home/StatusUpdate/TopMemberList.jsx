import React from 'react'

function TopMemberList({ player }) {
    return (
        <div className='status-update-item' key={player.id}>
            <span>{player.name}</span>
        </div>
    )
}

export default TopMemberList
