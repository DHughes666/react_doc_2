import { useState } from "react";
import Background from "./background_component";
import Box from "./box_component";

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


/**
 * There is a draggable box on a static background. 
 * You can change the box’s color using the select input.

    But there is a bug. If you move the box first, 
    and then change its color, the background 
    (which isn’t supposed to move!) will “jump” to the box position. 
    But this should not happen: the Background’s position prop is set 
    to initialPosition, which is { x: 0, y: 0 }. 
    Why is the background moving after the color change?

    Find the bug and fix it.
 */

const initialPosition = {
    x: 0,
    y: 0
};

const Canvas = () => {
    const [shape, setShape] = useState({
        color: 'orange',
        position: initialPosition
    });

    const handleMove = (dx, dy) => {
        setShape({
            ...shape,
            position: {
                x: shape.position.x + dx,
                y: shape.position.y + dy,
            }
        })
    }

    const handleColorChange = (e) => {
        setShape({
            ...shape,
            color: e.target.value
        });
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
            <option value="orange">orange</option>
            <option value='lightpink'>lightpink</option>
            <option value="aliceblue">aliceblue</option>
            </select>
            <Background 
                position={initialPosition}
            />

            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    )
}

export default Score;
export {Canvas};