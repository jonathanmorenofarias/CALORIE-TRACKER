import { useState } from "react"
import { FaArrowAltCircleRight } from "react-icons/fa";

const MacroForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        calories: "",
        protein: ""
    })
    
    const handleSubmit = (e) => {  
        e.preventDefault()
        localStorage.setItem("name", formData.name);
        localStorage.setItem("calories", formData.calories);
        localStorage.setItem("protein", formData.protein);
        window.location.href = "/home"
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="setup-page">
            <form className="macro-data" onSubmit={handleSubmit}>
                <h1>What is your name?</h1>
                <input 
                    type="text" 
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter Name"
                />

                <h1>How many calories do you want to eat?</h1>
                <input 
                    type="number"
                    value={formData.calories}
                    name="calories"
                    onChange={handleChange}
                    placeholder="Enter Calories"
                />

                <h1>What is your protein intake?</h1>
                <input 
                    type="number"
                    value={formData.protein}
                    name="protein"
                    onChange={handleChange}
                    placeholder="Enter Protein"
                />
                <button className="submit-macro">Submit</button>
            </form>
            <h1>Already set this up?</h1>
            <FaArrowAltCircleRight onClick={() => window.location.href = "/home"} className="already-done" />
            
        </div>
    )
}

export default MacroForm