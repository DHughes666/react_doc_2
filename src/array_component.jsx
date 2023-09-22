import { useState } from "react";
import { useImmer } from "use-immer";

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

// Making other changes to an array

/**
 * There are some things you can’t do with 
 * the spread syntax and non-mutating methods like map() and filter() alone. 
 * For example, you may want to reverse or sort an array. 
 * The JavaScript reverse() and sort() methods are mutating 
 * the original array, so you can’t use them directly.
 */


const initialList = [
    {id: 0, title: 'Big Bellies'},
    {id: 1, title: 'Lunar Landscape'},
    {id: 2, title: 'Terracotta Army'}
];

const List5 = () => {
    const [list, setList] = useState(initialList);

    const handleClick = () => {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList)
    }

    return (
        <>
            <button onClick={handleClick}>
                Reverse
            </button>
            <ul>
                {list.map(artwork => (
                    <li key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </>
    );
}

// Updating objects inside arrays

/**
 * Objects are not really located “inside” arrays. 
 * They might appear to be “inside” in code, but each object in 
 * an array is a separate value, to which the array “points”. 
 * This is why you need to be careful when changing nested fields like list[0]. 
 * Another person’s artwork list may point to the same element of the array!

    When updating nested state, you need to create copies 
    from the point where you want to update, and all the way up to 
    the top level. Let’s see how this works.

    In this example, two separate artwork lists have 
    the same initial state. They are supposed to be isolated, 
    but because of a mutation, their state is accidentally shared, 
    and checking a box in one list affects the other list:
 */

const initialList2 = [
    {id: 0, title: 'Big Bellies', seen: false},
    {id: 1, title: 'Lunar Landscape', seen: false},
    {id: 2, title: 'Terracota Army', seen: true},
]

const BucketList = () => {
    const [myList, setMyList] = useState(initialList2);
    const [yourList, setYourList] = useState(initialList2);

    const handleToggleMyList = (artworkId, nextSeen) => {
        setMyList(myList.map(artwork => {
            if (artwork.id === artworkId) {
                // Create a *new* object with changes
                return {...artwork, seen: nextSeen}
            } else {
                // No changes
                return artwork
            }
        }))
    }

    const handleToggleYourList = (artworkId, nextSeen) => {
        setYourList(yourList.map(artwork => {
            if (artwork.id === artworkId) {
                // Create a *new* object with changes
                return {...artwork, seen: nextSeen}
            } else {
                // No changes
                return artwork;
            }
        }));
    } 

    const ItemList = ({artworks, onToggle}) => {
        return (
            <ul>
                {artworks.map(artwork => (
                    <li key={artwork.id}>
                        <label>
                        <input 
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}</label>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see: </h2>
            <ItemList 
                artworks={myList}
                onToggle={handleToggleMyList}
            />
            <h2>Your list of art to see: </h2>
            <ItemList 
                artworks={yourList}
                onToggle={handleToggleYourList}
            />
        </>
    )
}

// Write concise update logic with Immer

/**
 * Updating nested arrays without mutation can get a little bit repetitive. 
 * Just as with objects:
    Generally, you shouldn’t need to update state more than a 
    couple of levels deep. If your state objects are very deep, you might want 
    to restructure them differently so that they are flat.
    If you don’t want to change your state structure, you might prefer 
    to use Immer, which lets you write using the convenient but mutating 
    syntax and takes care of producing the copies for you.
 */


const BucketList3 = () => {
    const [myList, updateMyList] = useImmer(initialList2);
    const [yourList, updateYourList] = useImmer(initialList2);

    const handleToggleMyList = (id, nextSeen) => {
        updateMyList(draft => {
            const artwork = draft.find(a => a.id === id);
            artwork.seen = nextSeen
        })
    }

    const handleToggleYourList = (artworkId, nextSeen) => {
        updateYourList(draft => {
            const artwork = draft.find(a => a.id === artworkId);
            artwork.seen = nextSeen;
        })
    }

    const ItemList = ({artworks, onToggle}) => {
        return (
            <ul>
                {artworks.map(artwork => (
                    <li key={artwork.id}>
                        <label>
                            <input 
                                type="checkbox"
                                checked={artwork.seen}
                                onChange={e => {
                                    onToggle(
                                        artwork.id,
                                        e.target.checked
                                    );
                                }}
                            />
                            {artwork.title}
                        </label>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see: </h2>
            <ItemList 
                artworks={myList}
                onToggle={handleToggleMyList}
            />
            <h2>Your list of art to see: </h2>
            <ItemList 
                artworks={yourList}
                onToggle={handleToggleYourList}
            />
        </>
    )

}



export default List1;
export { List2, List3, List4, List5, 
    ShapeEditor, CounterList, BucketList, BucketList3 };