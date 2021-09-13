import React, { useState } from 'react';

const Forms = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    }

    const newUser = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        password: password,
        comfirmPassword : confirmPassword,
    }

    console.log("Welcome", newUser)

    return (
    <div>
        <form onsubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            {
                firstName.length < 2 ?
                    <p>First Name must be at least 2 characters</p>
                    : null 
            }
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            {
                lastName.length < 2 ?
                    <p>Last Name must be at least 2 characters</p>
                    : null 
            }
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {
                email.length < 2 ?
                    <p>Email must be at least 2 characters</p>
                    : null 
            }
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            {
                password.length < 8 ?
                <p>Password must be at least 8 characters</p>
                : null 
            }
            <div>
                <label>Confirm: </label>
                <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            {
                password !== confirmPassword ?
                    <p className="error">Passwords do not match</p>
                    : null
            } 
            <input type="submit" value="Create User" />
        </form>

        <div>
        <h3>Form Data</h3>
        <p>
            <label>First Name: </label>{ firstName }
        </p>
        <p>
            <label>Last Name: </label>{ lastName }
        </p>
        <p>
            <label>Email: </label>{ email }
        </p>
        <p>
            <label>Password: </label>{ password }
        </p>
        <p>
            <label>Confirm Password: </label>{ confirmPassword }
        </p>
        </div>
    </div>
  )
}

export default Forms