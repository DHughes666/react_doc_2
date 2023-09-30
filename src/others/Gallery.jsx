import { useState } from "react"
import { sculptureList } from "./data"

const Gallery = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < sculptureList.length - 1;

    const handleNextClick = () => {
        hasNext ? setIndex(index + 1) : setIndex(0);
    }

    const handlePreviousClick = () => {
        if (hasNext) {
            setIndex(index - 1);
        } else {
            setIndex(index + 10);
        }
        // hasNext ? setIndex(index - 1) : setIndex(10);
    }

    const handleMoreClick = () => {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handlePreviousClick}>
                Previous 
            </button>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img 
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
        
    )
}

export default Gallery;