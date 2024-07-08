import { useEffect, useState } from 'react'
import {Routes, Route, Link, useParams, Navigate} from 'react-router-dom'

function About(){
    return <h1>About page</h1>
}

function Home(){
    return <h1>I am Home page</h1>
}

function Listing(){
    return <h1>I am Listing page</h1>
}

function PageNotFount(){
    return <h1>I am PageNotFount page</h1>
}

function Users(props){
    const params = useParams();
    console.log("params: ", params);
    const [userData, setUserData] = useState(null)
    useEffect( () => {
        async function fetchData(){
            const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
            const userData = await resp.json()
            console.log("userData:", userData)
            setUserData(userData)
            console.log("final userdata : ", userData);
        }
        // IIFE - Immediately Invoked Fucntion Expression
        fetchData();
    }, []);
    console.log(props.isAdmin);
    return (
        <>
                <h3>I am a user component</h3>
                {userData == null ? <h3>Loading data ...</h3> : (
                    <>
                    <h4>User Name : {userData.username}</h4>
                    <h3>Name: {userData.name.firstname + " " + userData.name.lastname}</h3>
                    <h4>User Email : {userData.email}</h4>
                    <h4>User Phone : {userData.phone}</h4>
                    </>
                )}
        </>

    )
}

function Routing(){
    return (
        <>
            <h1>Routing Example</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Adout</Link>
                    </li>
                    <li>
                        <Link to="/listing">Listing</Link>
                    </li>
                    {/* <li>
                        <Link to="/users">Users</Link>
                    </li> */}
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/listing' element={<Listing/>} />
                <Route path='/abc' element={<Navigate to="/"></Navigate>}></Route>
                <Route path='users/:id' element={<Users isAdmin={true}></Users>}></Route>
                <Route path='*' element={<PageNotFount/>}/>

            </Routes>
        </>
    )
}

export default Routing;