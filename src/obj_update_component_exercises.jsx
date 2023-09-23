import { useState } from "react";
import { useImmer } from "use-immer";
import Background from "./background_component";
import Box from "./box_component";

// Challenge 1
// Fix incorrect state updates

/**
 * This form has a few bugs. Click the button that increases 
 * the score a few times. Notice that it does not increase. 
 * Then edit the first name, and notice that the score has 
 * suddenly “caught up” with your changes. Finally, 
 * edit the last name, and notice that the score has disappeared completely.

    Your task is to fix all of these bugs. As you fix them, 
    explain why each of them happens.
 */

   

const Scoreboard = () => {
    const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
    });

    const handlePlusClick = () => {
    setPlayer({
        ...player,
        score: player.score + 1,
    })
    }

    const handleFirstNameChange = (e) => {
    setPlayer({
        ...player,
        firstName: e.target.value,
    });
    }

    const handleLastNameChange = (e) => {
    setPlayer({
        ...player,
        lastName: e.target.value
    });
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
        <br />
        <label>
        First name:
        <input
            value={player.firstName}
            onChange={handleFirstNameChange}
        />
        </label>
        <br />
        <label>
        Last name:
        <input
            value={player.lastName}
            onChange={handleLastNameChange}
        />
        </label>
    </>
    );
}

// Find and Fix the mutation

/**
 * There is a draggable box on a static background. You can change 
 * the box’s color using the select input.

But there is a bug. If you move the box first, and then change 
its color, the background (which isn’t supposed to move!) will “jump” to 
the box position. But this should not happen: the Background’s 
position prop is set to initialPosition, which is { x: 0, y: 0 }. 
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
            y: shape.position.y + dy
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
        <option value="lightpink">lightpink</option>
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
  );
}


// Use Immer

/**
 * This is the same buggy example as in the previous challenge. 
 * This time, fix the mutation by using Immer. For your convenience, 
 * useImmer is already imported, so you need to change the shape 
 * state variable to use it.
 */

const Canvas2 = () => {
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition
  });

  const handleMove = (dx, dy) => {
    updateShape(draft => {
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  const handleColorChange = (e) => {
    updateShape(draft => {
      draft.color = e.target.value;
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
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
  );
}



export default Scoreboard;
export {Canvas, Canvas2};
    