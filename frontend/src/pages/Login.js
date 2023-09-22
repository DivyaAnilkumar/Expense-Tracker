import React, {useState} from "react";
import { useLogin } from "../hooks/useLogin";


export const Login = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {login, error, isLoading} = useLogin()
  
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);


       
    };
    return (
        <div className="auth-form-container">
            <h2>EXPENSE TRACKER</h2>
                <br></br>
            <h2>Login</h2>
            <form className ="login-form" onSubmit={handleSubmit}>
                
                <label htmlFor = "email"> Email</label>
                <input value = {email} onChange={ (e) =>setEmail(e.target.value) }type = "email" placeholder="youremail@gmail.com"  />
                <label htmlFor = "password">Password</label>
                <input value = {password}  onChange={(e) =>setPassword(e.target.value)} type="password" placeholder="*****"/>
                <button className="logreg-btn" type ="submit" disabled={isLoading}>Log In</button>
            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account ? Register here.</button>
            {error && <div className="error">{error}</div>}
            
        </div>
    );
};
// onFormSwitch
// props