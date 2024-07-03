const Button = () => {
    const handleClick = () => {
        console.log("Button Clicked")
    }
    return (
        <button onClick={handleClick}>Click Me</button>
        // onClick --> it should be camalcase beacase it is not HTML, it is jsx
    )
}

export default Button