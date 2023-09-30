import { useState, useRef } from "react";

// Challenge 1: Fix a broken chat input
/**
 * Type a message and click “Send”. 
 * You will notice there is a three second delay before you see 
 * the “Sent!” alert. During this delay, you can see an “Undo” button. Click it. 
 * This “Undo” button is supposed to stop the “Sent!” 
 * message from appearing. It does this by calling 
 * clearTimeout for the timeout ID saved during handleSend. 
 * However, even after “Undo” is clicked, the “Sent!” message 
 * still appears. Find why it doesn’t work, and fix it.
 */

const Chat = () => {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const timeoutID = useRef(null);

    const handleSend = () => {
        setIsSending(true);
        timeoutID.current = setTimeout(() => {
            alert('Sent!');
            setIsSending(false);
        }, 3000);
    }

    const handleUndo = () => {
        setIsSending(false);
        clearTimeout(timeoutID.current);
    }

    return (
        <>
            <input 
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                disabled={isSending}
                onClick={handleSend}
            >
                {isSending ? 'Sending...' : 'Send'}
            </button>
            <button onClick={handleUndo}>
                Undo
            </button>
        </>
    )
}

export default Chat;