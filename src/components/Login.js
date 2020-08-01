import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Redirect} from "react-router-dom";

export default function () {
    const [passwordCorrect, setPasswordCorrect] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const correctPassword = 'password'

    function checkPassword(entered, actual) {
        if (entered === actual) {
            setPasswordCorrect(true);
        }
        else {
            console.log("Wrong password")
        }
    }

    return (
        <>
        {
            passwordCorrect ? <Redirect to="/about" /> :
            <div>
                <form>
                    <div><TextField label='User ID: ' value={name} onChange={handleNameChange} /></div>
                    <div><TextField label="Password: " type="password" value={password} onChange={handlePasswordChange} /></div>

                    <div><Button onClick={() => checkPassword(password, correctPassword)}>Submit</Button></div>
                </form>
            </div>
        }
        </>
    )
}
