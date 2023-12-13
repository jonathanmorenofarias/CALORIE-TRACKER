import "../SignUp.css"
import Navbar from "../components/Navbar"
import { useState } from "react"

const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
        <div className="signup">
            <header className="login-header">
                <h1>MACRO MASTER</h1>
                <a href="/login">Login</a>
            </header>
            <div className="background-signup">
                <h1>Sign Up To Start Tracking</h1>
                <form className="signup-form">
                    <div className="signup-elements">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email Adress"
                            value={signUpData.email}
                            onChange={handleChange}
                            name="email"
                        />
                    </div>
                    <div className="signup-elements">
                        <label>Username</label>
                        <input type="text" placeholder="Enter Username"
                            value={signUpData.username}
                            onChange={handleChange}
                            name="username"
                        />
                    </div>
                    <div className="signup-elements">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password"
                            value={signUpData.password}
                            onChange={handleChange}
                            name="password"
                        />
                    </div>
                    <div className="signup-elements">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Re-Enter Password"
                            value={signUpData.confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword"
                        />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp