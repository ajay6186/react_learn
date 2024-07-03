const MyComponent = ({message, label}) => {
    
    return (
        //when you need to inject JS in JSx, you need to use
        <>
            <h1>{message}</h1>   
            <h2>{label}</h2>
        </>
    )
}

export const name = "MyComponent"
export const name1 = "MyComponent1"
export const name2 = "MyComponent2"

export default MyComponent

// there only one default export that should be there.