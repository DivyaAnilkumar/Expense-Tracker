import React, {useState} from "react";
import { useSignup } from "../hooks/useSignup";

export const Register = (props) => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {signup , error, isLoading} = useSignup()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(name, email, password);
    
    };
    return (
        <div className="auth-form-container">
            <h2>EXPENSE TRACKER</h2>
                <br></br>
            <h2>Register</h2>
            <form className ="register-form" onSubmit={handleSubmit}>
            
                <label htmlFor = "name">Full name</label>
                <input value={name} onChange={(e) =>setName(e.target.value)} name = "name" id = "name" placeholder="Full name"/>
                <label htmlFor = "email"> Email</label>
                <input value = {email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" />
                <label htmlFor = "password">Password</label>
                <input value = {password}  onChange={(e) =>setPassword(e.target.value)} type="password" placeholder="*****"/>
                <button className="logreg-btn" type ="submit" disabled={isLoading}>Sign up</button>

                
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account ? Login here.</button>
                +
            
            {error && <div className="error">{error}</div>}
        </div>    
    );
};  
// toggleForm
