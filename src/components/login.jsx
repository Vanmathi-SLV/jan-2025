import React, {useState } from 'react';
// import {DataProvider} from './context/newContext';
import { Navigate } from 'react-router-dom';
import { AuthApi } from '../api/authApi';

const Login = () => {
    // const { isAuthenticated, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // if (isAuthenticated) {
    //     return  <Navigate to="/" />;
    // }

    const submit  = async() => {
        console.log(email, password, "cred");
        
        
        const user =  await AuthApi.sign(email, password);
        console.log(user, "User");
        if(user){
            Navigate('/')
        }
        
        // window.localStorage.setItem("user",user)
        // login(user);
    }

    return (
        <div>
            <h2>Login</h2>
            <div >
                <h2>
                    Signin <br />
                    to access your app
                </h2>
                <form onSubmit={submit} >
                    <input placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
                    <input
                        placeholder={"Password"}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">
                        Sign in!
                    </button>
                    <span>
                        {/* Don't have an account yet ? <Link to={"/signup"}>Signup</Link> */}
                    </span>
                </form>
            </div>
            {/* <button onClick={login}>Log In</button> */}
        </div>
    );
};

export default Login;