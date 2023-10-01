import { useState, useRef } from "react";

// Challenge 1: Play and pause the video
/**
 * In this example, the button toggles a state variable to 
 * switch between a playing and a paused state. 
 * However, in order to actually play or pause the video, 
 * toggling state is not enough. You also need to call play() 
 * and pause() on the DOM element for the <video>. 
 * Add a ref to it, and make the button work.
 */

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    let stateRef = useRef(null);

    const handleClick = () => {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);

        if (nextIsPlaying) {
            stateRef.current.play();
        } else {
            stateRef.current.pause();
        }
    }

    return (
        <>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video 
                width='150'
                ref={stateRef}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source 
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    )
}

export default VideoPlayer;
