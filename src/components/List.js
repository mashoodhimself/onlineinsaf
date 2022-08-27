import React, { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function List(props) {

  const [users, setUsers] = useState([])

  useEffect(() => {

    const fetch_users = async () => {
      const response = await fetch("http://localhost:3000/users")
      const arr = await response.json()
      setUsers(arr)
    }

    fetch_users()

  },[])
 
  return (
    <div className='container list__container'>
      <div className='row'>
          {users.length ?
            users.map((item, i) => (
              <div key={i} className='mb-5 list__item border col-2'>
                  <div className='bg-img'>
                    <img className='adv__profile' src="https://www.sedsmanlegal.com.au/wp-content/uploads/2021/01/Jen_05-1.jpg" />
                  </div>
                  <div className='list__content'>
                    <div className='rating'> <FontAwesomeIcon icon={faStar} />5.0</div>
                    <h5><Link to={'/detail/' + item.id} >{item.name}</Link></h5>
                    <div className='expertise'>{item.expertise}</div>
                    <div className='hire__btn'><Link to={'/detail/'+item.id} className='btn btn-danger btn-sm'>Hire Me</Link></div>
                  </div>
                </div>
            ))
            :
            ''}
      </div>
    </div>
  )
}
