import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'
import { IoShirtSharp } from 'react-icons/io5'

function MainPitch() {
    return (
        <Container className='main-pitch'>
            <Row className='pitch-division'>
                <Col className='pitch-side-one'>
                    <div className='pitch-side-one-central-circle'>
                    </div>
                    <div className='pitch-side-one-goalkeeper-circle'>
                    </div>
                    <div className='main-pitch-tshirt'>
                        <IoShirtSharp />
                        <span className='shirt-holder-name'>David</span>
                    </div>
                </Col>
                <Col className='pitch-side-two'>
                    <div className='pitch-side-two-central-circle'>

                    </div>
                    <div className='pitch-side-two-goalkeeper-circle'>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MainPitch
