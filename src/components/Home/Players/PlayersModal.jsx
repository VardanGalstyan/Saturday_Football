import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { IoShirtSharp } from 'react-icons/io5'

function PlayersModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='player-modal'
        >
            <Modal.Body>
                <div className='players-joined'>
                    <div className='players-joined-item'>
                        <span><IoShirtSharp /></span>
                        <span>Arsen Harutyunyan</span>
                    </div>
                    <div className='players-joined-item'>
                        <span><IoShirtSharp /></span>
                        <span>Hakob Hakobyan</span>
                    </div>
                    <div className='players-joined-item'>
                        <span><IoShirtSharp /></span>
                        <span>Players Joined</span>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className='form-button'
                    onClick={props.onHide}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PlayersModal
