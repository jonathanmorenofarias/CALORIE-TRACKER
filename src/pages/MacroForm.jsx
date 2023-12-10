import { useState } from "react"

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
    )
}

export default MacroForm