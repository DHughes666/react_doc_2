import { useState } from "react";

/**
 * You’re working on an art marketplace app that lets the user 
submit multiple orders for an art item at the same time. 
Each time the user presses the “Buy” button, the “Pending” counter 
should increase by one. After three seconds, the “Pending” counter 
should decrease, and the “Completed” counter should increase.

However, the “Pending” counter does not behave as 
intended. When you press “Buy”, 
it decreases to -1 (which should not be possible!). 
And if you click fast twice, both counters seem to behave unpredictably.

Why does this happen? Fix both counters.
 */

const RequestTracker = () => {
    const [pending, setPending] =  useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(pending => pending + 1);
        await delay(3000);
        setPending(pending => pending - 1);
        setCompleted(completed => completed + 1);
    }

    const delay = (ms) => {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

    return (
        <>
            <h3>
                Pending: {pending}
            </h3>
            <h3>
                Completed: {completed}
            </h3>
            <button onClick={handleClick}>Buy</button>
        </>
    )
 }

 /**
  * Scroll through the sandbox preview. 
  * Notice that it shows four test cases. They correspond to the examples 
  * you’ve seen earlier on this page. Your task is to implement the 
  * getFinalState function so that it returns the correct result 
  * for each of those cases. If you implement it correctly, all four tests 
  * should pass.
  * 
  * You will receive two arguments: baseState is the 
  * initial state (like 0), and the queue is an array which 
  * contains a mix of numbers (like 5) and 
  * updater functions (like n => n + 1) in the order they were added.
  */

 export default RequestTracker;