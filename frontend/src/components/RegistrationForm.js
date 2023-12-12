```javascript
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { username, email, password, confirmPassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            console.log("Passwords do not match");
        } else {
            const newUser = {
                username,
                email,
                password
            }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const body = JSON.stringify(newUser);
                const res = await axios.post('/api/register', body, config);
                console.log(res.data);
            } catch(err) {
                console.error(err.response.data);
            }
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input 
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div>
                    <input 
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="6"
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={e => onChange(e)}
                        minLength="6"
                    />
                </div>
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default RegistrationForm;
```