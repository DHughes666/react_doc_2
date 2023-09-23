import { useState } from "react";
import { useImmer } from "use-immer";

const MovingDot = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    return (
        <div
            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh'
            }}
        >
            <div 
                style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20
                }}
            />
        </div>
    )
}

// Using the 'Spread' operator to mutate states



const Formy = () => {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  const handleFirstNameChange = (e) => {
    setPerson({
        ...person,
        firstName: e.target.value
    })
  }

  const handleLastNameChange = (e) => {
    setPerson({
        ...person,
        lastName: e.target.value
    })
  }

  const handleEmailChange = (e) => {
    setPerson({
        ...person,
        email: e.target.value
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}

// Updating nested objects

const Formy2 = () => {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  const handleNameChange = (e) => {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  const handleTitleChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  const handleCityChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  const handleImageChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
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
  );
}

// Using immer to for concise logic


const Formy3 = () => {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  const handleNameChange = (e) => {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  const handleTitleChange = (e) => {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  const handleCityChange = (e) => {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  const handleImageChange = (e) => {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
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
  );
}


export default MovingDot;
export {Formy, Formy2, Formy3};