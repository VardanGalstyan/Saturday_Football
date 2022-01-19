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
    const [isExpended, setIsExpended] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('footballAccessToken')
        navigate('/login')
    }

    const handleNavbarActions = (e) => {
        const text = e.target.innerText
        setIsExpended(!isExpended)
        if (text === 'ACTIVE GAMES') {
            navigate('/home')
        } else if (text === 'HISTORY') {
            navigate('/history')
        } else if (text === 'Edit Profile') {
            setShowModal(true)
        } else if (text === 'LOG OUT') {
            handleLogout()
        } else if (text === 'Sign up') {
            navigate('/register')
        } else if (text === 'Sign in') {
            navigate('/login')
        }

    }


    return (
        <Container className='navbar-container' fluid>
            <Navbar
                collapseOnSelect
                expanded={isExpended}
                expand="lg"
                bg="dark"
                variant="dark"
                fixed='top'
                onToggle={() => setIsExpended(!isExpended)}
            >
                <Navbar.Brand onClick={() => navigate(token ? 'home' : 'login')}>{token && data.full_name ? `Welcome ${data.full_name}` : `welcome`}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        {token &&
                            <>
                                <Nav.Link onClick={(e) => handleNavbarActions(e)}>ACTIVE GAMES</Nav.Link>
                                <Nav.Link onClick={(e) => handleNavbarActions(e)}>HISTORY</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav>
                        {token ?
                            <>
                                <Nav.Link onClick={(e) => handleNavbarActions(e)}>Edit Profile</Nav.Link>
                                <Nav.Link onClick={(e) => handleNavbarActions(e)}>LOG OUT</Nav.Link>
                            </> :
                            <>
                                <Nav.Link onClick={(e) => handleNavbarActions(e)}>Sign in</Nav.Link>
                                <Nav.Link onClick={(e) => handleNavbarActions(e)}>Sign up</Nav.Link>
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
