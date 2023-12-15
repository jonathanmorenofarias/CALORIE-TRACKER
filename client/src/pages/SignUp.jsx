import "../styles/SignUp.css"
import MacroLogo from "../images/MacroLogo.png"
import { useState } from "react"
import { handleChange } from "./handleForms"

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
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
                <img src={MacroLogo} className="macro-logo" alt="Macro Master Logo" />
                <a href="/login">Login</a>
            </header>
            <div className="body-signup">
                <div className="background-signup">
                    <h1>Sign Up To Start Tracking</h1>
                    <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="signup-elements">
                            <label>Name</label>
                            <input type="text" placeholder="Enter Name"
                                value={signUpData.name}
                                onChange={(e) => handleChange(e, signUpData, setSignUpData)}  
                                name="name"
                            />
                        </div>
                        <div className="signup-elements">
                            <label>Email</label>
                            <input type="text" placeholder="Enter Email Adress"
                                value={signUpData.email}
                                onChange={(e) => handleChange(e, signUpData, setSignUpData)}  
                                name="email"
                            />
                        </div>
                        <div className="signup-elements">
                            <label>Username</label>
                            <input type="text" placeholder="Enter Username"
                                value={signUpData.username}
                                onChange={(e) => handleChange(e, signUpData, setSignUpData)}  
                                name="username"
                            />
                        </div>
                        <div className="signup-elements">
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password"
                                value={signUpData.password}
                                onChange={(e) => handleChange(e, signUpData, setSignUpData)}  
                                name="password"
                            />
                        </div>
                        <div className="signup-elements">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Re-Enter Password"
                                value={signUpData.confirmPassword}
                                onChange={(e) => handleChange(e, signUpData, setSignUpData)}  
                                name="confirmPassword"
                            />
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp