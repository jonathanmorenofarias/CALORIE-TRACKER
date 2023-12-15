import { useState } from "react"
import { IoIosRefresh } from "react-icons/io"
import Navbar from "../components/Navbar"

const Home = () => {
    const [formData, setFormData] = useState({
        calories: "",
        protein: ""
    })

    const [addition, setAddition] = useState({
        num1: "",
        num2: "",
        total: 0
    })

    const handleSubmit = (e) => {
        localStorage.setItem("calories", localStorage.getItem("calories") - formData.calories);  
        localStorage.setItem("protein", localStorage.getItem("protein") - formData.protein);  
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleNums = (e) => {
        setAddition({
            ...addition,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Navbar/>
            <h1>Hey, {localStorage.getItem("name")} </h1>
            <h2>Current Calories left: {localStorage.getItem("calories")}</h2>
            <h2>Current Protein left: {localStorage.getItem("protein")}</h2>
            <form className="food-form" onSubmit={handleSubmit}>
                <h1>Enter Meal</h1>
                <input type="number" 
                    name="calories"
                    value={formData.calories}
                    onChange={handleChange}
                    placeholder="Calories"
                />
                <input type="number" 
                    name="protein"
                    value={formData.protein}
                    onChange={handleChange}
                    placeholder="Protein"
                />
                <button>Submit</button>
            </form>

            <div className="addition">
                <input type="number" 
                    value={addition.num1}
                    onChange={handleNums}
                    name="num1"
                />
                <p>+</p>
                <input type="number" 
                    value={addition.num2}
                    onChange={handleNums}
                    name="num2"
                />
                <p>=</p>
                <h1>{Number(addition.num1) + Number(addition.num2)}</h1>
            </div>

            <div className="reset">
                <h1>Reset Calories</h1>
                <IoIosRefresh onClick={() => window.location.href = "/"} className="refresh" />
            </div>
        </div>
    )
}

export default Home