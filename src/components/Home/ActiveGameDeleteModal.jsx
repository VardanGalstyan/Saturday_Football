import React from 'react'
import { Modal } from 'react-bootstrap'

function ActiveGameDeleteModal(props) {
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
                        ARE YOU SURE YOU WANT TO DELETE THIS GAME?
                    </span>
                    <div className='delete-modal-buttons'>
                        <span onClick={props.handleDelete}>Yes</span>
                        <span onClick={props.onHide}>No</span>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ActiveGameDeleteModal
