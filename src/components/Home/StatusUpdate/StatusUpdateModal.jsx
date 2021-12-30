import React, { useState } from 'react'
import { Modal, Button, Col, Form } from 'react-bootstrap'
import TeamItem from './TeamItem'

function StatusUpdateModal(props) {

    const players = ['John Doe', 'Jane Doe', 'Jack Doe', 'Jill Doe', "Brian O'Connor", 'Andre Craig', 'Barrack Obama', "Elon Musk", 'William Def']

    const [teamValue, setTeamValue] = useState(0)
    const [teams, setTeams] = useState({})


    const handleRandomize = () => {
        setTeams(chunkArray(players, teamValue))
    }

    function chunkArray(arr, n) {
        let chunkLength = Math.max(arr.length / n, 1);
        let chunks = [];
        let randomArray = arr[Math.floor(Math.random() * arr.length)]
        arr.forEach((x, i) =>
            (chunkLength * (i + 1) <= arr.length)
            && chunks
                .push(arr
                    .slice(chunkLength * i, chunkLength * (i + 1))));
        // for (let i = 0; i < n; i++) { // loop twice
        //     if (chunkLength * (i + 1) <= arr.length)
        //         chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
        // }
        return chunks;
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
