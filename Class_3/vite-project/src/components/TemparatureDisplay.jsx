import { useState } from "react";

function TemperatureDisplay({temperature}) {
    // const [temperature, setTemperature] = useState('')

    const  fahrenheit = (temperature * 9/5) + 32

    return (
        <div>
            <p>Temperature in Celcius: {temperature} deg C</p>
            <p>Temperature in Fahrenheit: {fahrenheit.toFixed(1)} def F</p>
        </div>
    )
}

export default TemperatureDisplay