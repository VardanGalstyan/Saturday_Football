import React from 'react'
import { useSelector } from 'react-redux'
import HistoryItem from './HistoryItem'
import './style.css'

function History() {

    const history = useSelector(state => state.history.data)

    return (
        <div className='history'>
            {history.map(item => <HistoryItem game={item.session} key={item._id} />)}
        </div>
    )
}

export default History
