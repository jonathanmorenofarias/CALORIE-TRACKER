import "../styles/SignUp.css"
import MacroLogo from "../images/MacroLogo.png"
import { useState } from "react"
import { handleChange } from "./handleForms"

const Login = () => {
    const [logInData, setLogInData] = useState({
        username: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://www.localhost:4000/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }

    return (
        <div className="signup">
            <header className="login-header">
                <img src={MacroLogo} alt="Macro Master Logo" className="macro-logo" />
                <a href="/">Sign Up</a>
            </header>
            <div className="body-signup">
                <div className="background-signup">
                    <h1>Login To Start Tracking</h1>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="signup-elements">
                            <label>Username</label>
                            <input type="text" placeholder="Enter Username"
                                value={logInData.username}
                                onChange={(e) => handleChange(e, logInData, setLogInData)}  
                                name="username"
                            />
                        </div>
                        <div className="signup-elements">
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password"
                                value={logInData.password}
                                onChange={(e) => handleChange(e, logInData, setLogInData)}  
                                name="password"
                            />
                        </div>
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login