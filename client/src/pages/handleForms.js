export const handleChange = (e, data, setData) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
    console.log(data)
}

