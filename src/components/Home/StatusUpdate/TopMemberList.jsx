import React from 'react'

function TopMemberList({ player }) {
    return (
        <div className='status-update-item' key={player._id}>
            <span>{player.full_name}</span>
        </div>
    )
}

export default TopMemberList
