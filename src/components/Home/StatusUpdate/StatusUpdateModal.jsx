import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { chunkArray, shuffle } from '../../../utilities/status-utils.js'
import { DragDropContext } from 'react-beautiful-dnd'
import { players } from '../../../initial-data.js'
import TopMemberList from './TopMemberList'
import TeamItem from './TeamItem'

function StatusUpdateModal(props) {

    const [teamValue, setTeamValue] = useState(0) // useMemo or useCallback
    const [teams, setTeams] = useState([])


    const handleGenerate = () => {
        if (teams.length > 1 && teamValue !== teams.length) {
            setTeamValue([])
            setTeams(chunkArray(players, teamValue))
        }
        setTeams(chunkArray(players, teamValue))
    }

    const handleShuffle = () => {
        if (teams.length >= 2) {
            shuffle(players)
            setTeams(chunkArray(players, teamValue))
        }
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
                    {players.map((player) => <TopMemberList player={player} key={player.id} />)}
                </div>
                <DragDropContext
                    onDragEnd={(result) => { }}
                >
                    <div className={`teams-divided`}>
                        {
                            teams.map((team, index) => (
                                <TeamItem
                                    key={index}
                                    team={team}
                                    index={index}
                                    id={`team-${index}`}
                                />
                            ))
                        }
                    </div>
                </DragDropContext>
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
                            <span onClick={handleGenerate}>Generate Teams</span>
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
        </Modal >
    )
}

export default StatusUpdateModal
