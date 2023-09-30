import { useState } from "react";
import { places } from "./data-component-exercise";
import { getImageUrl } from "./utils-component-exercise";

/* 
In this example, toggling the checkbox changes the 
imageSize prop passed to each <PlaceImage>. 
The checkbox state is held in the top-level 
App component, but each <PlaceImage> needs to 
be aware of it.

Currently, App passes imageSize to List, 
which passes it to each Place, which passes 
it to the PlaceImage. Remove the imageSize prop, 
and instead pass it from the App component 
directly to PlaceImage.
*/

const AppComp = () => {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150: 100;

    return (
        <>
            <labe>
                <input 
                type="checkbox" 
                checked={isLarge}
                onChange={e => {
                    setIsLarge(e.target.checked);
                }}
            />
            Use large images
            <hr />
            <List imageSize={imageSize} />
            </labe>   
        </>
    )
}

const List = ({imageSize}) => {
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place 
                place={place}
                imageSize={imageSize}
            />
        </li>
        )
    return (<ul>{listItems}</ul>)
}

const Place = ({place, imageSize}) => {
    return (
        <>
            <PlaceImage 
                place={place}
                imageSize={imageSize}
            />
            <p>
                <b>{place.name}</b>
                {': ' + place.description}
            </p>
        </>
    )
}

const PlaceImage = ({ place, imageSize }) => {
    return (
        <img 
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    )
}

export default AppComp;