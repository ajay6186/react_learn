import { useState } from "react";

function TemperatureInput({temperature, onTemperatureChange}) {
    // const [temparature, setTemparature] = useState('');

    return (
        <div>
            <label htmlFor="">Enter Temperature</label>
            <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e.target.value)} />
        </div>
    );
}

export default TemperatureInput