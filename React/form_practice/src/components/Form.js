import React, {useState} from "react";

const Form = (props) =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault()

        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        }
    }


    return (
        <div>
            <form onSubmit = {createUser}>
                <label>First Name: </label>
                <input 
                type="text"
                name="firstName"
                onChange ={(e) => setFirstName(e.target.value)}
                />
                <label>Last Name: </label>
                <input 
                type="text"
                name="lastName"
                onChange ={(e) => setLastName(e.target.value)}
                />
                <label>Email: </label>
                <input 
                type="email"
                name="email"
                onChange ={(e) => setEmail(e.target.value)}
                />
                <label>Password: </label>
                <input 
                type="password"
                name="password"
                onChange ={(e) => setPassword(e.target.value)}
                />
                <label>Confirm Password: </label>
                <input 
                type="password"
                name="confirmPassword"
                onChange ={(e) => setConfirmPassword(e.target.value)}
                />
            </form>
            <hr/>
            <h2>Info</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default Form