import React, { useState } from 'react'
import './UserInfo.css'

const UserInfo = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    // Err msg
    const [isNameEmpty, setIsNameEmpty] = useState(true)
    const [isEmailEmpty, setIsEmailEmpty] = useState(true)
    const [isNumberEmpty, setIsNumberEmpty] = useState(true)

    const userDetails = {
        firstname, lastname, email, number
    }

    const submitUserInfo = (e) => {
        e.preventDefault()
        if (firstname.trim() === '' || lastname.trim() === '' || email.trim() === '' || number.trim() === '') {
            setIsEmailEmpty(false)
            setIsNameEmpty(false)
            setIsNumberEmpty(false)
        }
        else if (firstname.trim() === '') {
            setIsNameEmpty(false)
        }
        else if (lastname.trim() === '') {
            setIsNameEmpty(false)
        }
        else if (email.trim() === '') {
            setIsEmailEmpty(false)
        }
        else if (number.trim() === '') {
            setIsNumberEmpty(false)
        }
        else {
            setIsEmailEmpty(true)
            setIsNameEmpty(true)
            setIsNumberEmpty(true)
            console.log(userDetails)

        }
    }

    return (
        <form onSubmit={submitUserInfo} className='userInfoContainer' >
            <div className='inputContainer' >
                <label htmlFor='firstName' >First Name</label>
                <input value={firstname} id='firstName' onChange={e => setFirstname(e.target.value)} className='userinfoInput' placeholder='John Doe' type='text' />
                {!isNameEmpty && <p className='userInputErrMsg' >First Name cannot be empty</p>}
            </div>
            <div className='inputContainer' >
                <label htmlFor='lastName' >Last Name</label>
                <input value={lastname} id='lastName' onChange={e => setLastname(e.target.value)} className='userinfoInput' placeholder='John Doe' type='text' />
                {!isNameEmpty && <p className='userInputErrMsg' >LastName cannot be empty</p>}
            </div>
            <div className='inputContainer' >
                <label htmlFor='email' >Email</label>
                <input id='email' value={email} className='userinfoInput' onChange={e => setEmail(e.target.value)} placeholder='johndoe@gmail.com' type='email' />
                {!isEmailEmpty && <p className='userInputErrMsg' >Email cannot be empty</p>}
            </div>
            <div className='inputContainer' >
                <label htmlFor='number' >Phone Number</label>
                <input id='number' value={number} className='userinfoInput' onChange={e => setNumber(e.target.value)} placeholder='1234567890' type='number' />
                {!isNumberEmpty && <p className='userInputErrMsg' >Phone Number cannot be empty</p>}
            </div>
            <button className='userInputButton' >Enter</button>
        </form>
    )
}

export default UserInfo
