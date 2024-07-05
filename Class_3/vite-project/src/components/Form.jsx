import { useState } from "react";

const SimpleForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({name:"", email: ""});

    console.log(name)

    const handleChange = (event) => {
        const {name, value} = event.target; // address -> updated address event.target.name
        setFormData({
            ...formData,
            [name]: value
        })
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name : ${name}, Email : ${email}`)
        console.log("Name: ", name);
        console.log("Email : ", email);
        setEmail('');
        setName('');
    };

    return (
        // <form onSubmit={handleSubmit}>
        //     {/* controlled components */}
        //     <div>
        //         <label htmlFor="name">Name:</label>
        //         <input 
        //         type="text" 
        //         id="name" 
        //         value={name} 
        //         onChange={(event) => setName(event.target.value)}/>
        //     </div>
        //     <div>
        //         <label htmlFor="email">Email:</label>
        //         <input 
        //         type="text" 
        //         id="name" 
        //         value={email} 
        //         onChange={(event) => setEmail(event.target.value)}/>
        //     </div>
        //     <button type="submit">Submit</button>
        // </form>

        <form onSubmit={handleSubmit}>
            {/* controlled components */}
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                type="text" 
                id="name" 
                value={email} 
                onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
        
    );
}

export default SimpleForm