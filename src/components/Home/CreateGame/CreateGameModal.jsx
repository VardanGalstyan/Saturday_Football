import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { ClockLoader } from "react-spinners";
import { useDispatch } from 'react-redux'
import { fillSessionData } from '../../../Redux/Actions/actions'
import { RiErrorWarningFill } from 'react-icons/ri'

function CreateGameModal(props) {

    const dispatch = useDispatch()

    const initialState = {
        session_date: '',
        session_time: '',
        session_location: '',
        changing_room: '',

    }
    const token = localStorage.getItem('footballAccessToken');
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await fetch(`${process.env.REACT_APP_URL}/players/me/session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                setLoading(false)
                setError(false)
                setData(initialState)
                dispatch(fillSessionData())
                props.onHide()
            } else {
                setLoading(false)
                setError(true)
            }

        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    const handleClose = () => {
        props.onHide()
        setData(initialState)
    }

    const handleError = () => {
        setError(false)
        setData(initialState)
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
                    <Form onSubmit={(e) => handleSubmit(e)} >
                        <Row>
                            <Form.Group xs={6} as={Col}>
                                <Form.Control
                                    type="date"
                                    placeholder="Date"
                                    value={data.session_date}
                                    onChange={(e) => setData({ ...data, session_date: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="time"
                                    placeholder="Time"
                                    value={data.session_time}
                                    onChange={(e) => setData({ ...data, session_time: e.target.value })}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group xs={7} as={Col} >
                                <Form.Control
                                    type="text"
                                    placeholder="Location"
                                    value={data.session_location}
                                    onChange={(e) => setData({ ...data, session_location: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="number"
                                    placeholder="Changing Room"
                                    value={data.session_room}
                                    onChange={(e) => setData({ ...data, session_room: e.target.value })}
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className='form-button'
                    onClick={handleClose}>
                    Close
                </Button>
                {
                    loading ?
                        <ClockLoader color={"#fff"} size={25} /> :
                        error ?
                            <span onClick={handleError} className='boarding-error'><RiErrorWarningFill />Invalid Credentials</span>
                            :
                            <Button onClick={handleSubmit} className='form-button'>
                                NEW GAME
                            </Button>
                }
            </Modal.Footer>
        </Modal>
    )
}

export default CreateGameModal
