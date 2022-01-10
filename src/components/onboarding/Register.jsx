import './style.css'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { ClockLoader } from "react-spinners";
import { RiErrorWarningFill } from 'react-icons/ri'

function Login() {

    const initialState = {
        full_name: '',
        email: '',
        password: '',
    }

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [player, setPlayer] = useState(initialState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_URL}/players`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(player)
            })
            if (response.ok) {
                const data = await response.json();
                setPlayer(data.savedPlayer);
                localStorage.setItem('footballAccessToken', data.accessToken);
                setLoading(false)
                navigate('/home')
            } else {
                setError(true)
                setLoading(false)
            }

        } catch (error) {
            setError(true)
            console.log(error);
        }
    }

    const handleError = () => {
        setError(false)
        setPlayer(initialState)
    }

    return (
        <Container className='sign-in-form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='form-group-item'>
                    <Form.Control
                        type="text"
                        placeholder="Enter Full Name"
                        value={player.full_name}
                        onChange={(e) => setPlayer({ ...player, full_name: e.target.value })}
                    />
                </Form.Group>
                <Form.Group className='form-group-item'>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={player.email}
                        onChange={(e) => setPlayer({ ...player, email: e.target.value })}
                    />
                </Form.Group>
                <Form.Group className='form-group-item'>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={player.password}
                        onChange={(e) => setPlayer({ ...player, password: e.target.value })}
                    />
                </Form.Group>
                <div className='form-button-area'>
                    {
                        loading ?
                            <ClockLoader color={"#fff"} size={25} /> :
                            error ?
                                <span onClick={handleError} className='boarding-error'>
                                    <RiErrorWarningFill />
                                    Invalid Credentials
                                </span>
                                :
                                <Button type="submit" className='form-button'>
                                    Sign up
                                </Button>
                    }
                </div>
            </Form>
        </Container>
    )
}

export default Login