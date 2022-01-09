import React, { useState, useEffect } from 'react'
import EditProfileModal from './EditProfileModal'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './style.css'

function TopNavbar() {

    const token = localStorage.getItem('footballAccessToken')
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        handlePlayerFetch()
    }, [])


    const handlePlayerFetch = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${process.env.REACT_APP_URL}/players/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setLoading(false)
            } else {
                setError(true)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

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
                        {
                            token &&
                            <>
                                <Nav.Link href="#features">ACTIVE GAMES</Nav.Link>
                                <Nav.Link href="#pricing">HISTORY</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav>
                        {token ?
                            <NavDropdown title="Profile Settings">
                                <NavDropdown.Item onClick={() => setShowModal(true)}>Edit Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogout}>LOG OUT</NavDropdown.Item>
                            </NavDropdown> :
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
