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

  // Replacing items in an array
  /**
   * It is particularly common to want to replace one 
   * or more items in an array. Assignments like 
   * arr[0] = 'bird' are mutating the original array, 
   * so instead you’ll want to use map for this as well.

    To replace an item, create a new array with map. 
    Inside your map call, you will receive the item index as 
    the second argument. Use it to decide whether to return the 
    original item (the first argument) or something else
   */

let initialCounters = [
    0, 0, 0
]

const CounterList = () => {
    const [counters, setCounters] = useState(initialCounters);

    const handleIncrementClick = (index) => {
        const nextCounters = counters.map((c, i) => {
            if (i === index) {
                // Increment the clicked counter
                return c + 1;
            } else {
                // The rest haven't changed
                return c;
            }
        });
        setCounters(nextCounters);
    }

    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}{' '} 
                    <button onClick={() => {
                        handleIncrementClick(i)
                    }}>+1</button>
                </li>
            ))}
        </ul>
    );

}

// Inserting into an array

/**
 * Sometimes, you may want to insert an item at a particular 
 * position that’s neither at the beginning nor at the end. 
 * To do this, you can use the ... array spread syntax together 
 * with the slice() method. The slice() method lets 
 * you cut a “slice” of the array. To insert an item, 
 * you will create an array that spreads the slice before the 
 * insertion point, then the new item, and then the rest of the original array.
 */

let nextId2 = 3;
const initialArtists3 = [
    {id: 0, name: 'Marta Colvin Andrade'},
    {id: 1, name: 'Lamidi Olonade Fakeye'},
    {id: 2, name: 'Louise Nevelson'}
];

const List4 = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists3);

    const handleClick = () => {
        const insertAt = 1; // Could be any index
        const nextArtists = [
            // Items before the insertion point:
            ...artists.slice(0, insertAt),
            // New item:
            {id: nextId2++, name: name},
            // Items after the insertion point:
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('')
    }

    return (
        <>
            <h1>Inspiring sculptors: </h1>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Insert
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    )
}



export default List1;
export { List2, List3, List4, ShapeEditor, CounterList };