import { useState, useRef } from "react";
import { flushSync } from "react-dom";
// Challenge 3: Scrolling an image carousel
/**
 * This image carousel has a “Next” button that switches 
 * the active image. Make the gallery scroll horizontally 
 * to the active image on click. You will want to call scrollIntoView() 
 * on the DOM node of the active image:
 */

const catList = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: 'https://placekitten.com/250/200?image=' + i
    })
}

const CatFriendsExercise = () => {
    const selectedRef = useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <>
            <nav>
                <button onClick={() => {
                    flushSync(() => {
                        if(index < catList.length - 1) {
                        setIndex(index + 1);
                    } else {
                        setIndex(0);
                    }
                    });
                    selectedRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center',
                    })
                }}>
                    Next
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat, i) => (
                        <li 
                            key={cat.id}
                            ref={index === i ? selectedRef : null}
                        >
                            <img 
                                className={
                                    index === i ? 'active' : ''
                                }
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CatFriendsExercise;