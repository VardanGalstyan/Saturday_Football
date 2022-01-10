import React, { useState } from 'react'
import EditProfileModal from './EditProfileModal'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './style.css'

function TopNavbar() {

    const token = localStorage.getItem('footballAccessToken')
    const navigate = useNavigate()
    const data = useSelector(state => state.user.data)

    const [showModal, setShowModal] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('footballAccessToken')
        navigate('/login')
    }

    return (
        <Container className='navbar-container' fluid>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand onClick={() => navigate("/home")}>Game</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        {token &&
                            <>
                                <Nav.Link href="#features">ACTIVE GAMES</Nav.Link>
                                <Nav.Link href="#pricing">HISTORY</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav>
                        {token ?
                            <>
                                <Nav.Link onClick={() => setShowModal(true)}>Edit Profile</Nav.Link>
                                <Nav.Link onClick={handleLogout}>LOG OUT</Nav.Link>
                            </> :
                            <>
                                <Nav.Link onClick={() => navigate('login')}>Sign in</Nav.Link>
                                <Nav.Link onClick={() => navigate('register')}>Sign up</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
                <EditProfileModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    data={data}
                />
            </Navbar>
        </Container>
    )
}

export default TopNavbar
