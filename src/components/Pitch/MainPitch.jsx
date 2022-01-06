import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'
import Tshirt from './Tshirt'


function MainPitch() {
    return (
        <Container className='main-pitch'>
            <Row className='pitch-division'>
                <Col className='pitch-side-one'>
                    <div className='pitch-side-one-central-circle'>
                    </div>
                    <div className='pitch-side-one-goalkeeper-circle'>
                    </div>
                    <div className='formation-six-players'>
                        <Col className='formation-goalkeeper'>
                            <Tshirt />
                        </Col>
                        <Col className='formation-defence'>
                            <Tshirt />
                            <Tshirt />
                            <Tshirt />
                        </Col>
                        <Col className='formation-offence'>
                            <Tshirt />
                            <Tshirt />
                        </Col>
                    </div>
                </Col>
                <Col className='pitch-side-two'>
                    <div className='pitch-side-two-central-circle'>

                    </div>
                    <div className='pitch-side-two-goalkeeper-circle'>

                    </div>
                    <div className='formation-six-players'>
                        <Col className='formation-offence'>
                            <Tshirt />
                            <Tshirt />
                        </Col>
                        <Col className='formation-defence'>
                            <Tshirt />
                            <Tshirt />
                            <Tshirt />
                        </Col>
                        <Col className='formation-goalkeeper'>
                            <Tshirt />
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MainPitch
