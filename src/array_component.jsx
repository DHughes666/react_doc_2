import { useState } from "react";

// Adding to an Array

let nextId = 0;

const List1 = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <>
            <h1>Inspiring sculptors: </h1>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                artists.push({
                    id: nextId++,
                    name: name,
                });
            }}>
                Add
            </button>
            
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    )
}

const List2 = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <>
            <h1>Inspiring sculptors: </h1>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setArtists([
                    ...artists,
                    {id: nextId++, name: name}
                ])
            }}>
                Add
            </button>
            
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    )
}

//Removing from an array

/**
 * The easiest way to remove an item from an array is to filter it out. 
 * In other words, you will produce a new array that will not 
 * contain that item. To do this, use the filter method
 */

let initialArtists = [
    {id: 0, name: 'Marta Colvin Andrade'},
    {id: 1, name: 'Lamidi Olonade Fakeye'},
    {id: 2, name: 'Louise Nevelson'}
];

const List3 = () => {
    const [artists, setArtists] = useState(initialArtists);
    
    return(
        <>
            <h1>Inspiring sculptors: </h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                    {artist.name}{' '}
                    <button
                        onClick={() => {
                            setArtists(
                                artists.filter(a => a.id !== artist.id)
                            )
                        }}
                    >
                        Delete
                    </button>
                    </li>
                ))}
            </ul>
        </>
    )
}


// Transforming an array 

/**
 * If you want to change some or all items of the array, 
 * you can use map() to create a new array. 
 * The function you will pass to map can 
 * decide what to do with each item, 
 * based on its data or its index (or both).
 */

let initialShapes = [
    {id: 0, type: 'circle', x: 50, y:100},
    {id: 1, type: 'square', x: 150, y:100},
    {id: 2, type: 'circle', x: 250, y:100}
  ];
  
  const ShapeEditor = () => {
    const [shapes, setShapes] = useState(initialShapes);
  
    const handleClick = () => {
      const nextShapes = shapes.map(shape => {
        if (shape.type === 'square') {
            // No change
            return shape;
        } else {
            // Return a new circle 50px below
            return {
                ...shape,
                y: shape.y + 50
            }
        }
      });

      // Re-render with the new array
      setShapes(nextShapes);
    }

    return (
        <>
            <button onClick={handleClick}>
                Move circles down!
            </button>
            {shapes.map(shape => (
                <div 
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius: shape.type === 'circle' ? '50%' : '',
                        width: 20,
                        height: 20,
                    }}
                />
            ))}
        </>
    )


  }

export default List1;
export { List2, List3, ShapeEditor };