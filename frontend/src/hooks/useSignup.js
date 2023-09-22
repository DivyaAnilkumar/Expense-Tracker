import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/';

export const useSignup = () => {
    const [error, setError ] =useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (name, email, password) => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await axios.post(`${BASE_URL}signup`, { name, email, password });

            //Save the user to local storage
            localStorage.setItem('user',JSON.stringify(response.data));

            //Update the auth context
            dispatch({ type: 'LOGIN', payload: response.data });

            //Update the loading state
            setIsLoading(false);
        } catch (error) {
            console.error("Signup failed:", error.response.data.error);
            setError(error.response.data.error);
            setIsLoading(false);
        }
    };
        
    return { signup, isLoading, error}
}