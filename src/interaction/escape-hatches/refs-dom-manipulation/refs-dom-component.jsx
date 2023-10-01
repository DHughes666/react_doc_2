import { useRef, forwardRef, useState,
    useImperativeHandle } from "react";
import { flushSync } from "react-dom";

const Form = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    )
}

const CatFriends = () => {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);

    const handleScrollToFirstCat = () => {
        firstCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    }

    const handleScrollToSecondCat = () => {
        secondCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        })
    }

    const handleScrollToThirdCat = () => {
        thirdCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        })
    }

    return (
        <>
            <nav>
                <button onClick={handleScrollToFirstCat}>
                    Tom
                </button>
                <button onClick={handleScrollToSecondCat}>
                    Maru
                </button>
                <button onClick={handleScrollToThirdCat}>
                    Jellylorum
                </button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img 
                            src="https://placekitten.com/g/200/200"
                            alt="Tom"
                            ref={firstCatRef}
                        />
                    </li>
                    <li>
                        <img 
                            src="https://placekitten.com/g/300/200"
                            alt="Maru"
                            ref={secondCatRef}
                        />
                    </li>
                    <li>
                        <img 
                            src="https://placekitten.com/g/250/200"
                            alt="Jellylorum"
                            ref={thirdCatRef}
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}

const catList = []
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i, 
        imageUrl: 'https://placekitten.com/250/200?image=' + i
    });
}

const CatFriends1 = () => {
    const itemsRef = useRef(null);

    const scrollToId = (itemId) => {
        const map = getMap();
        const node = map.get(itemId);
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    }

    const getMap = () => {
        if (!itemsRef.current) {
            // Initialize the Map on first usage.
            itemsRef.current = new Map();
        }
        return itemsRef.current
    }

    return (
        <>
            <nav>
                <button onClick={() => scrollToId(0)}>
                    Tom
                </button>
                <button onClick={() => scrollToId(5)}>
                    Maru
                </button>
                <button onClick={() => scrollToId(9)}>
                    Jellylorum
                </button>
            </nav>

            <div>
                <ul>
                    {catList.map(cat => (
                        <li
                            key={cat.id}
                            ref={(node) => {
                                const map = getMap();
                                if (node) {
                                    map.set(cat.id, node);
                                } else {
                                    map.delete(cat.id);
                                }
                            }}
                        >
                            <img 
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

const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />
});

const Form1 = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    )
}

//Second

const MyInput1 = forwardRef((props, ref) => {
    const realInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        // Only expose focus and nothing else
        focus() {
            realInputRef.current.focus();
        },
    }));
    return <input {...props} ref={realInputRef}/>;
});

const Form2 = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput1 ref={inputRef}/>
            <button onClick={handleClick}>
                Focus the input
            </button>
        </>
    )
}

// Third

let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
    initialTodos.push({
        id: nextId++,
        text: 'Todo #' + (i + 1)
    })
}

const TodoList = () => {
    const listRef = useRef(null);
    const [text, setText] = useState('');
    const [todos, setTodos] = useState(initialTodos);

    const handleAdd = () => {
        const newTodo = {id: nextId++, text: text};
        flushSync(() => {
            setText('')
            setTodos([...todos, newTodo]);
        });
        listRef.current.lastChild.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    return (
        <>
            <button onClick={handleAdd}>
                Add
            </button>
            <input 
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <ul ref={listRef}>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    )
}

// Fourth

const Counter1 = () => {
    const [show, setShow] = useState(true);
    const ref = useRef(null);

    return (
        <div>
            <button onClick={() => {
                setShow(!show);
            }}>
                Toggle with setState
            </button>
            <button onClick={() => {
                ref.current.remove();
            }}>
                Remove from the DOM
            </button>
            {show && <p ref={ref}>Hello world</p>}
        </div>
    )
}

export {Form, CatFriends, CatFriends1, Counter1,
    Form1, Form2, TodoList};