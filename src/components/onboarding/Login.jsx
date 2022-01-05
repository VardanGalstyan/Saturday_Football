import React, { useState } from 'react'
import { ClockLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'


function Login() {

    const navigate = useNavigate()

    const initialState = {
        email: '',
        password: '',
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [player, setPlayer] = useState(initialState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_URL}/players/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(player)
            })
            if (response.ok) {
                const data = await response.json();
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


    return (
        <div className='sign-in-form'>
            <Form onSubmit={handleSubmit}>
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
                            <ClockLoader color={"#fff"} size={25} />
                            :
                            <Button
                                type="submit"
                                className='form-button'
                            >
                                SIGN IN
                            </Button>
                    }
                </div>
            </Form>
        </div>
    )
}

export default Login
