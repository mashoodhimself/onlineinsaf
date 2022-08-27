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
        const response = await fetch(`http://localhost:3000/login?email=${email}`)
        const response_arr = await response.json()
        if(response_arr.length && response_arr[0].password == password) { 
            localStorage.setItem('logged_in', JSON.stringify(response_arr))
            navigate('/list')
            return false
        }
        setMessage('Wrong email or password! Please try again.')
    }

    return (
        <Container>
            {message ? <Alert variant="danger">{message}</Alert> : ''}
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
                    Register
                </Button>
            </Form>
        </Container>
    )
}
