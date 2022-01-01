import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import TeamItem from './TeamItem'

function StatusUpdateModal(props) {

    const players = ['John Doe', 'Jane Doe', 'Jack Doe', 'Jill Doe', 'Andre Craig', 'Barrack Obama', "Elon Musk", 'William Def', "Brian O'Connor"]

    const [teamValue, setTeamValue] = useState(0)
    const [teams, setTeams] = useState([])

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function chunkArray(arr, n) {
        let chunkLength = Math.max(arr.length / n, 1);
        let chunks = [];
        arr.forEach((x, i) =>
            (chunkLength * (i + 1) <= arr.length)
            && chunks
                .push(arr
                    .slice(chunkLength * i, chunkLength * (i + 1))));
        return chunks;
    }

    const handleRandomize = () => {
        setTeams(chunkArray(players, teamValue))
    }

    const handleShuffle = () => {
        shuffle(players)
        setTeams(chunkArray(players, teamValue))
    }

    const handleClose = () => {
        props.onHide()
        setTeams([])
        setTeamValue(0)
    }

    const handleClear = () => {
        setTeams([])
        setTeamValue(0)
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
                            teams.map((players, index) => {
                                return (
                                    <TeamItem key={index} players={players} index={index} />
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
                                    <option>0</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className='random-select-button mr-1'>
                            <span onClick={handleRandomize}>Generate Teams</span>
                        </div>
                        <div className='random-select-button'>
                            <span
                                onClick={handleShuffle}
                            >Shuffle</span>
                        </div>
                    </div>
                    <div>
                        <div className='random-select-button'>
                            <span onClick={handleClear}>Clear</span>
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
                    onClick={handleClose}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StatusUpdateModal
