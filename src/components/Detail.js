
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import { faStar,faList,faCity,faScaleUnbalancedFlip, faArrowUp19 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Detail(props) {

    const params = useParams()
    const [user, setUser] = useState({})

    const fetch_user_on_id = async () => {
        const id = params.id
        const response = await fetch(`http://localhost:3000/users/${id}`)
        return await response.json()
    }

    useEffect(() => {
        const set_user = async () => {
            let u = await fetch_user_on_id()
            setUser(u)
        }
        set_user()
    }, [])

    return (
        <Container className='detail__container'>
            <div className='adv__detail_info'>
                <h2>{user.name}</h2>
                <div className='rating'>
                    <span><FontAwesomeIcon icon={faStar} color="yellow" /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                </div>
                <div className='adv__p_info'>
                    <span className='adv__exp btn btn-success btn-sm'><FontAwesomeIcon icon={faList} /> {user.expertise}</span>
                    <span className='adv__adr btn btn-primary btn-sm'><FontAwesomeIcon icon={faCity} /> {user.address}</span>
                    <span className='adv__court btn btn-danger btn-sm'><FontAwesomeIcon icon={faScaleUnbalancedFlip} /> {user.court}</span>
                    <span className='adv__cases btn btn-warning btn-sm'><FontAwesomeIcon icon={faArrowUp19} /> {user.totalCases}</span>
                </div>
                <p className='adv__bio'>{user.bio}</p>
                <div className='adv__contact_btns'>
                    <button className='btn btn-outline-secondary btn-lg'>Whatsapp</button>
                    &nbsp;
                    <button className='btn btn-outline-primary btn-lg'>Mail</button>
                </div>
            </div>
        </Container>
    )
}
