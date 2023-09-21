import { useState } from "react";

/**
 * This form has a few bugs. 
 * Click the button that increases the score a few times. 
 * Notice that it does not increase. Then edit the first name, 
 * and notice that the score has suddenly “caught up” with your changes. 
 * Finally, edit the last name, and notice that 
 * the score has disappeared completely.
 */

const Score = () => {
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10
    })

    const handlePlusClick = () => {
        setPlayer({
            ...player,
            score: player.score + 1
        })
    }

    const handleFirstNameChange = (e) => {
        setPlayer({
            ...player,
            firstName: e.target.value
        });
    }

    const handleLastNameChange = (e) => {
        setPlayer({
            ...player,
            lastName: e.target.value
        })
    }

    return (
        <>
            <label>
                Score: <b>{player.score}</b>
                {' '}
                <button onClick={handlePlusClick}>
                    +1
                </button>
            </label>
            <label>
                First name:
                <input 
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input 
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </>
    )
}

export default Score;