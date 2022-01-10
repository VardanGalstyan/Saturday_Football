import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { chunkArray, shuffle } from '../../../utilities/status-utils.js'
import { DragDropContext } from 'react-beautiful-dnd'
// import { players } from '../../../initial-data.js'
import { useSelector } from 'react-redux'
import TopMemberList from './TopMemberList'
import TeamItem from './TeamItem'

function StatusUpdateModal(props) {


    const players = useSelector(state => state.players.data)

    // S T A T E S
    const [teamValue, setTeamValue] = useState(0) // useMemo or useCallback
    const [teams, setTeams] = useState([])


    const handleGenerate = () => {
        if (teams.length > 1 && teamValue !== teams.length) {
            setTeams([])
            setTeams(chunkArray(players, teamValue))
        } else {
            setTeams(chunkArray(players, teamValue))
        }
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

    const onDragEnd = result => {
        const { destination, source, draggableId } = result
        if (!destination) {
            return
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        if (destination.droppableId === source.droppableId &&
            destination.index !== source.index) {

            const draggableTeam = teams.find(team => team.team_id === source.droppableId)
            const newTeamPlayers = [...draggableTeam.players]

            const [removed] = newTeamPlayers.splice(source.index, 1)
            newTeamPlayers.splice(destination.index, 0, removed)


            setTeams(teams.map(team => {
                if (team.team_id === source.droppableId) {
                    return { ...team, players: newTeamPlayers }
                }
                return team
            }))
        }

        if (destination.droppableId !== source.droppableId) {
            const draggableTeam = teams.find(team => team.team_id === source.droppableId)
            const droppableTeam = teams.find(team => team.team_id === destination.droppableId)
            const newTeamPlayers = [...draggableTeam.players]
            const newDroppableTeamPlayers = [...droppableTeam.players]
            const [removed] = newTeamPlayers.splice(source.index, 1)
            newDroppableTeamPlayers.splice(destination.index, 0, removed)


            const newTeams = teams.map(team => {
                if (team.team_id === source.droppableId) {
                    return { ...team, players: newTeamPlayers }
                }
                if (team.team_id === destination.droppableId) {
                    return { ...team, players: newDroppableTeamPlayers }
                }
                return team
            })

            setTeams(newTeams)
        }


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
                    {players.map((player) => <TopMemberList player={player} key={player._id} />)}
                </div>
                <DragDropContext
                    onDragEnd={onDragEnd}
                >
                    <div className={`teams-divided`}>
                        {
                            teams.map((team, index) => (
                                <TeamItem
                                    key={team.team_id}
                                    team={team.players}
                                    index={index}
                                    id={team.team_id}
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
