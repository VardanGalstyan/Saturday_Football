import React from 'react'
import { Col } from 'react-bootstrap'
import TeamSingleItem from './TeamSingleItem'
import uniqid from 'uniqid'

function TeamItem(props) {

    const { teams } = props

    const drop = e => {
        e.preventDefault()

        const teamMember_id = e.dataTransfer.getData("member_id")
        const teamMember = document.getElementById(teamMember_id)
        teamMember.style.display = "block"
        let player = teamMember.childNodes[0].innerText.split(' ').slice(1).join(' ')

        const containerFrom = parseInt(e.dataTransfer.getData("container_from").split('-')[1]) - 1
        const containerTo = (value) => {
            if (value.className.includes('team-player-item')) {
                return parseInt(value.parentNode.id.split('-')[1]) - 1
            } else if (value.className.includes('team-container')) {
                return parseInt(value.id.split('-')[1]) - 1
            } else if (value.className.includes('single-player')) {
                return parseInt(value.parentNode.parentNode.id.split('-')[1]) - 1
            }
        }

        // console.log(containerTo(e.target));


        if (e.target.className.includes('team-player-item')) {
            e.target.parentNode.appendChild(teamMember)

            if (containerTo(e.target) !== null) {
                const filteredArray = teams[containerFrom].filter((team, index) => !team.includes(player))
                // props.teamUpdates([...teams[containerTo(e.target)], player])
                // props.teamUpdates([...teams, teams[containerFrom] = filteredArray, teams[containerTo(e.target)].push(player)])
                console.log('spread', [...teams, teams[containerFrom] = filteredArray]);
                // console.log('teams', teams);
                // console.log([filteredArray, [...teams[containerTo(e.target)], player]]);
                // props.teamUpdates([filteredArray, [...teams[containerTo(e.target)], player]]);
            }


        } else if (e.target.className.includes('team-container')) {
            e.target.appendChild(teamMember)

        } else if (e.target.className.includes('single-player')) {
            e.target.parentNode.parentNode.appendChild(teamMember)

        }
    }


    const dragOver = e => {
        e.preventDefault()

    }


    return (
        <Col
            id={props.id}
            xs={5}
            className='team-container'
            onDrop={drop}
            onDragOver={dragOver}
        >

            <div
                className='team-container-header'
            >
                Team {props.index + 1}
            </div>

            {props.players && props.players.map((player, index) => {
                return (
                    <TeamSingleItem
                        key={index}
                        player={player}
                        index={index}
                        id={uniqid()}
                    />
                )
            })
            }
        </Col>
    )
}

export default TeamItem
