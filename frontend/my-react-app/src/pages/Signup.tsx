import { useState, type ChangeEvent, type FormEvent } from "react"
import api from "../api/axios"
import './Signup.css'
export default function Signup() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await api.post("/api/post", formData);
            console.log(response)
        }catch(Err){
            console.log(Err)
        }
    }
    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
            <input type="text"
             name="name"
             placeholder ="Enter name"
             value={formData.name}
             onChange={handleChange}
             required
             />


             <input type="text"
             name="email"
             placeholder ="Enter Placeholder"
             value={formData.email}
             onChange={handleChange}
             required/>


             <input type="password"
             name="password"
             placeholder ="Enter Password"
             value={formData.password}
             onChange={handleChange}
             required/>

             <button type="submit">Submit</button>

             </form>
        </div>
    )
}