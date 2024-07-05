import { useState, useEffect } from "react";

function FetchDataComponent(){
    const [data, setData] = useState(null)

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const result = await response.json()
            setData(result)
        }
        fetchData()
    },[])
    console.log(`test data ${data}`)

    return (
        <div>
            {data ? (
                <p>Data Loaded with first user {data[0].name}</p>
                ) : (
                    <p>Logging.......</p>
            )}
        </div>
    );
}

export default FetchDataComponent

// rules of hooks
// 1. only call hooks at the top level
// 2. only call hooks from react function
// 3. cannot call hooks inside loops, conditions or nested functions