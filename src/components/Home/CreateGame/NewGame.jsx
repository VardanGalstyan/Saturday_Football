import React, { useState } from 'react'
import { VscAdd } from 'react-icons/vsc'
import CreateGameModal from './CreateGameModal'

function NewGame() {

    const [newGame, setNewGame] = useState(false)
    const [modalShow, setModalShow] = useState(false)

    return (
        <div
            onMouseEnter={() => setNewGame(true)}
            onMouseLeave={() => setNewGame(false)}
            className='create-new-game active-game'
        >
            {
                !newGame
                    ?
                    <span>Shall we play ?</span>
                    :
                    <span
                        onClick={() => setModalShow(true)}
                    >
                        <VscAdd />
                    </span>
            }

            <CreateGameModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default NewGame
