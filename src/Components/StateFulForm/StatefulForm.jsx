// import { useState } from "react";

import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('belal')
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length <6){
            setError('password must be 6 crarecrt')
        }
        else{
            setError(' ')
        }
        console.log(email, password, name);
    };
    const handleNameSubmit = e=>{
        setName(e.target.value)
    }
    const handleEmailSubmit = e=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange =e =>{
            setPassword(e.target.value);
            }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}
                onChange={handleNameSubmit}
                type="text" name="name" />
                <br />
                <input 
                onChange={handleEmailSubmit}
                type="email" name="email" id="" />
                <br />
                <input
                onChange={handlePasswordChange}
                
                type="password" name="password" required />
                <br />
                
                <input type="submit" value="Submit"  />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;