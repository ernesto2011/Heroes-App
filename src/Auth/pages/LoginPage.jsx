import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {
   const { login } = useContext(AuthContext)
   const navigate = useNavigate();

    const SignIn = () =>{
        const lastPath = localStorage.getItem('lastPath') || '/'
        login('Ernesto Lopez');
        navigate(lastPath, {
            replace: true
        });
    }
  return (
    
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr />
        <button 
        onClick={SignIn}
        className='btn btn-primary'>
            Login
        </button>
    </div>
  )
}
