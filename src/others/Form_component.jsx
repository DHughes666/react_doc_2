import { useState } from "react";

const Form = () => {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    const handleNameChange = (event) => {
        setPerson({
            ...person, 
            name: event.target.value
        })
    }

    const handleTitleChange = (event) => {
        setPerson({
            ...person, 
            artwork: {
                ...person.artwork,
                title: event.target.value
            }
        })
    }

    const handleCityChange = (event) => {
        setPerson({
            ...person, 
            artwork: {
                ...person.artwork,
                city: event.target.value
            }
        })
    }

    const handleImageChange = (event) => {
        setPerson({
            ...person, 
            artwork: {
                ...person.artwork,
                image: event.target.value
            }
        })
    }

    return (
        <>
            <label>
                Name:
                <input 
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <br />
            <label>
                Title:
                <input 
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <br />
            <label>
                City:
                <input 
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <br />
            <label>
                Image:
                <input 
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img 
                src={person.artwork.image}
                alt={person.artwork.title} 
            />

        </>
    )
}

export default Form;