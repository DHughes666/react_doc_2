import { useState } from "react";

// Challenge 2: Fix a component failing to re-render
/**
 * This button is supposed to toggle between showing “On” and “Off”. 
 * However, it always shows “Off”. What is wrong with this code? Fix it
 */

const Toggle = () => {
    const [on, setOn] = useState(false);

    return (
        <button onClick={() => {
            setOn(!on);
        }}>
            {on ? 'On' : 'Off'}
        </button>
    )
}

export default Toggle;