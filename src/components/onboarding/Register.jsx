import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { ClockLoader } from "react-spinners";
import './style.css'

function Login() {

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }



    return (
        <Container className='sign-in-form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='form-group-item'>
                    <Form.Control
                        type="text"
                        placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className='form-group-item'>
                    <Form.Control
                        type="email"
                        placeholder="Enter email" />
                </Form.Group>
                <Form.Group className='form-group-item'>
                    <Form.Control
                        type="password"
                        placeholder="Password"
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
                                SIGN UP
                            </Button>
                    }
                </div>
            </Form>
        </Container>
    )
}

export default Login