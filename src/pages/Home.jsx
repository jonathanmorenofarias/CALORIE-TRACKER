import { useState } from "react"

const Home = () => {
    const [formData, setFormData] = useState({
        calories: "",
        protein: ""
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

    return (
        <div>
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
        </div>
    )
}

export default Home