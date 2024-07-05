import { useState, useEffect } from "react";

function ExampleComponent(){
    const [count, setCount] = useState(0)

    // useEffect( () =>{
    //     document.title = `You clicked ${count} times`
    // }, [count])

    useEffect( () =>{
        // document.title = `You clicked ${count} times`
        const timer = setInterval(() => {
            console.log("Timer tick ")
        }, 1000)
        // cleanup function or as part of unmounting
        return () => {
            clearInterval(timer)
        }
    }, [count])

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Clcick me</button>
        </div>
    )
}

export default ExampleComponent