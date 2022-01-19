import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fillHistoryData, fillSessionData } from '../../../../Redux/Actions/actions'
import { FunctionContext } from '../CreateContext.js'

function DropGameModal(props) {

    const game = props.game
    const token = props.token
    const dispatch = useDispatch()
    const handleClose = useContext(FunctionContext)


    const handleEndGame = async () => {
        try {

            const response = await fetch(`${process.env.REACT_APP_URL}/players/overtime/${game._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
            if (response.ok) {
                dispatch(fillSessionData())
                dispatch(fillHistoryData())
                props.onHide()
                handleClose()
            } else {
                throw new Error('Something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className='active-game-delete-modal'>
                    <span>
                        Are you sure you want to drop the game?
                    </span>
                    <div className='delete-modal-buttons'>
                        <span onClick={handleEndGame}>Yes</span>
                        <span onClick={props.onHide}>No</span>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DropGameModal
