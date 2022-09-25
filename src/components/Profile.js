import { Alert } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [phone, setPhone] = useState("")
    const [education, setEducation] = useState("")
    const [courts, setCourts] = useState("")
    const [totalCases, setTotalCases] = useState(0)
    const [totalWon, setTotalWon] = useState(0)
    const [expertise, setExpertise] = useState("")
    const [bio, setBio] = useState("")
    const [message, setMessage] = useState(false)

    const [userType, setUserType] = useState("")

    // const navigate = useNavigate()

    const logged_in_user = () => {
        return JSON.parse(localStorage.getItem('logged_in'))
    }

    const getUserProfile = async (user_id) => {
        const response = await fetch(`http://localhost/api/profile/user_profile/${user_id}`)
        const resp_obj = await response.json()
        setName(resp_obj.full_name)
        setPhone(resp_obj.phone_no)
        setEducation(resp_obj.education)
        setCourts(resp_obj.courts)
        setTotalCases(resp_obj.total_cases)
        setTotalWon(resp_obj.total_won)
        setExpertise(resp_obj.expertise)
        setBio(resp_obj.bio)
        setUserType(resp_obj.user_type)
    }

    useEffect(() => {
        const user_id = logged_in_user()[0].user_id
        getUserProfile(user_id)
    }, [])

    const add_profile = async (data) => {
        const url = "http://localhost/api/profile/add_profile";
        const config = {
            method:'POST',
            mode: 'no-cors',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data)
        }
        const response = await fetch(url, config)
        return await response.json()
    }

    async function handleForm(e) {
        e.preventDefault()
        const user_id = logged_in_user()[0].user_id 
        const userdata = {
            user_id, 
            name,
            phone,
            courts,
            totalCases,
            totalWon,
            expertise,
            bio,
            education
        }
        try{
            await add_profile(userdata)
        } catch(ex) {
            e.target.reset()
            setMessage(true)
        }
    }

  return (
    <div className='custom_container container'>
        {message ? <Alert variant="success" >Profile Updated Successfully.</Alert> : null}
        <h2>My Profile</h2>
        <form onSubmit={(e) => handleForm(e)} >

            <div className='form-group mb-2 mt-3'>
                <label>Full Name</label>
                <input type="text" name="fullname" id="fullname" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className='form-group mb-2 mt-3'>
                <label>Phone #</label>
                <input type="text" name="phone_no" id="phone_no" className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            
            { userType === 'lawyer' ? 
            <div className='form-group mb-2 mt-3'>
                <label>Education</label>
                <input type="text" name="phone_no" id="phone_no" className='form-control' value={education} onChange={(e) => setEducation(e.target.value)} />
            </div>
            : null } 

            { userType === 'lawyer' ? 
            <div className='form-group mb-2 mt-3'>
                <label>Courts</label>
                <input type="text" name="courts" id="courts" className='form-control' value={courts} placeholder='Enter comma separated keywords if needed.' onChange={(e) => setCourts(e.target.value)} />
            </div> 
            : null } 
            
            
            { userType === 'lawyer' ? 
            <div className='form-group mb-2 mt-3'>
                <label>Total Cases</label>
                <input type="number" name="total_cases" id="total_cases" className='form-control' value={totalCases} onChange={(e) => setTotalCases(e.target.value)} />
            </div> 
            : null } 

            { userType === 'lawyer' ? 
            <div className='form-group mb-2 mt-3'>
                <label>Total Won</label>
                <input type="number" name="total_won" id="total_won" className='form-control' value={totalWon} onChange={(e) => setTotalWon(e.target.value)} />
            </div>
            : null }  

            { userType === 'lawyer' ? 
            <div className='form-group mb-2 mt-3'>
                <label>Expertise</label>
                <select name='expertise' id='expertise' value={expertise} className='form-control' onChange={(e) => setExpertise(e.target.value)} >
                    <option disabled></option>
                    <option value='service-cases'>Service Cases</option>
                    <option value='criminal-cases'>Criminal Cases</option>
                    <option value='land-cases'>Land Cases</option>
                </select>
            </div>
            : null }   

            { userType === 'lawyer' ? 
            <div className='form-group mb-2 mt-3'>
                <label>Bio</label>
                <textarea name='bio' id='bio' className='form-control' value={bio} onChange={(e) => setBio(e.target.value) } placeholder='Write something about yourself maximum 500 words.'></textarea>
            </div>
            : null }    

            <div className='form-group mb-4'>
                <label>Avatar</label>
                <input type="file" name="avatar" id="avatar" className='form-control' onChange={(e) => setAvatar(e.target.files[0])} />
            </div>

            <div className='form-group mb-3'>
                <input type="submit" name="subtn" id="subtn" className='btn btn-primary' />
            </div>
        </form>
    </div>
  )
}
