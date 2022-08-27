import React from 'react'
import { Container } from 'react-bootstrap'

export default function Contact() {
    return (
        <Container className='contact_container'>
            <div className="contact-form-wrapper d-flex">
                <form action="#" className="contact-form">
                    <h1 className="title">Contact us</h1>
                    <p className="description">Feel free to contact us if you need any assistance, any help or another question.
                    </p>
                    <div className='form-group'>
                        <input type="text" className="form-control rounded mb-3 form-input" id="name" placeholder="Name" required />
                    </div>
                    <div className='form-group'>
                        <input type="email" className="form-control rounded mb-3 form-input" placeholder="Email" required />
                    </div>
                    <div className='form-group'>
                        <textarea id="message" className="form-control rounded mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
                    </div>
                    <div className="submit-button-wrapper form-group">
                        <input className='btn btn-primary btn-lg' type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </Container>
    )
}
