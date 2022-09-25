import React, { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()
    
    const user_login = async (e) => {
        e.preventDefault()
        const login_data = {email, password}
        const response = await fetch(`http://localhost/api/Auth/user?email=${email}`)
        const response_arr = await response.json()
        if(response_arr.length && response_arr[0].user_password == password) { 
            localStorage.setItem('logged_in', JSON.stringify(response_arr))
            navigate('/profile')
            return
        }
        setMessage('Wrong email or password! Please try again.')
    }

    return (
        <Container className='login_container' >
            {message ? <Alert variant="danger">{message}</Alert> : ''}
            <h2 className='text-center' >User Login</h2>
            <Form onSubmit={user_login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}
