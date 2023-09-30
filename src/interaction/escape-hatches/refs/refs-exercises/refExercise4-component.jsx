
// Challeng 4: Read the latest state
/**
 * In this example, after you press “Send”, 
 * there is a small delay before the message is shown. 
 * Type “hello”, press Send, and then quickly edit the input again. 
 * Despite your edits, the alert would still show “hello” 
 * (which was the value of state at the time the button was clicked).
 * 
Usually, this behavior is what you want in an app. 
However, there may be occasional cases where you want some 
asynchronous code to read the latest version of some state. 
Can you think of a way to make the alert show the current 
input text rather than what it was at the time of the click?
 */

import { useState, useRef } from "react";

const Chatty = () => {
    const [text, setText] = useState('');
    const textRef = useRef(text);

    const handleChange = (e) => {
        setText(e.target.value);
        textRef.current = e.target.value;
    }

    const handleSend = () => {
        setTimeout(() => {
            alert('Sending: ' + text);
        }, 3000);
    }

    return (
        <>
            <input 
                value={text}
                onChange={handleChange}
            />
            <button onClick={handleSend}>
                Send
            </button>
        </>
    )
}

export default Chatty;