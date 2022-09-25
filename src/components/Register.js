import React, { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'

export default function Register() {

    const [email, setEmail] = useState("")
    const [type, setType] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccuess] = useState(false)

    const save_api = async (user_data) => {
        const response = await fetch('http://localhost/api/Auth/register',{
            method:'POST',
            mode: 'no-cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user_data)
        })

        return await response.json()
    }

    async function registerUser(e) {
        e.preventDefault()
        const user_data = {
            'user_email':email,
            'user_password':password,
            'user_type':type
        }
        try{
            await save_api(user_data)
        } catch(ex) {
            setSuccuess(true)
            e.target.reset()
        }
    }

    return (
        <Container className='register_container'>

            {success ? <Alert variant='success'>User should be saved successfully, if not then something went wrong.</Alert> : null }


            <h2 className='text-center'>Signup Form</h2>
            <Form onSubmit={(e) => registerUser(e)} >
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="user_email" name="user_email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Register As</Form.Label>
                    <select required id='formBasicType' name='user_type' onChange={(e) => setType(e.target.value)} className='form-control' defaultValue="client">
                        <option disabled value="">User Type</option>
                        <option value="client">Client</option>
                        <option value="lawyer">Lawyer</option>
                    </select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="user_password" name="user_password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
