import React from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

function CreateGameModal(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onHide()
        console.log('submit');
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='new-game-modal'
        >
            <Modal.Body>
                <div className='new-game-modal-body'>
                    <Form
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <Row>
                            <Form.Group xs={4} as={Col}>
                                <Form.Control
                                    type="text"
                                    placeholder="Game Name"
                                />
                            </Form.Group>
                            <Form.Group xs={4} as={Col}>
                                <Form.Control
                                    type="date"
                                    placeholder="Date"
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="time"
                                    placeholder="Time"
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group xs={7} as={Col} >
                                <Form.Control
                                    type="text"
                                    placeholder="Location"
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    placeholder="Changing Room"
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className='form-button'
                    onClick={props.onHide}>
                    Close
                </Button>
                <Button
                    className='form-button'
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >

                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateGameModal
