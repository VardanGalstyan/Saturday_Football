import React, { useState } from 'react'
import { Modal, Button, Col, Form } from 'react-bootstrap'
import TeamItem from './TeamItem'

function StatusUpdateModal(props) {

    const players = ['John Doe', 'Jane Doe', 'Jack Doe', 'Jill Doe', "Brian O'Connor", 'Andre Craig', 'Barrack Obama', "Elon Musk", 'William Def']

    const [teamValue, setTeamValue] = useState(0)
    const [teams, setTeams] = useState({})


    const handleRandomize = () => {
        let myArrayWithNoDuplicates = players.reduce(function (previousValue, currentValue) {
            if (previousValue.indexOf(currentValue) === -1) {
                previousValue.push(currentValue)
            }
            return previousValue
        }, [])

        console.log(myArrayWithNoDuplicates)
    }


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='status-update-modal'
        >
            <Modal.Body>
                <div className='player-status-container'>
                    {
                        players.map((player, index) => {
                            return (
                                <div className='status-update-item' key={index}>
                                    <span>{player}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='teams-divided'>
                    {
                        teamValue === null ?
                            <span>Select Number of Teams</span> :
                            [...Array(parseInt(teamValue))].map((item, index) => {
                                return (
                                    <TeamItem key={index} index={index} />
                                )
                            })
                    }
                </div>
                <div className='player-status-control-line'>
                    <div className='d-flex'>
                        <div className='number-of-teams mr-1'>
                            <Form.Group>
                                <Form.Control
                                    as="select"
                                    size="sm"
                                    value={teamValue}
                                    onChange={(e) => setTeamValue(e.target.value)}
                                >
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className='random-select-button mr-1'>
                            <span>Generate Teams</span>
                        </div>
                        <div className='random-select-button'>
                            <span
                                onClick={handleRandomize}
                            >Randomize</span>
                        </div>
                    </div>
                    <div>
                        <div className='random-select-button'>
                            <span>Clear</span>
                        </div>
                    </div>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className='form-button'
                    onClick={props.onHide}
                >
                    Play</Button>
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

export default StatusUpdateModal
