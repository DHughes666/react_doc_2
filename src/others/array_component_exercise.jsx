import { useState } from "react";
import { useImmer } from "use-immer";
import AddTodo from "./AddTodos_component";
import TaskList from "./TaskList_component";

// Update an item in the shopping cart

/**
 * Fill in the handleIncreaseClick logic so that
 * pressing "+" increases the corresponding number
 */

const initialProducts = [
    {id: 0, name: 'Baklava', count: 1},
    {id: 1, name: 'Cheese', count: 5},
    {id: 2, name: 'Spaghetti', count: 2}
];

const ShoppingCart = () => {
    const [products, setProducts] = useState(initialProducts);

    const handleIncreaseClick = (prodctId) => {
        setProducts(products.map(product => {
            if (product.id === prodctId) {
                return {...product, count: product.count+1};
            } else {
                return product;
            }
        }))
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}{' '}
                    (<b>{product.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(product.id)
                    }}>
                        +
                    </button>
                </li>
            ))}
        </ul>
    )
}

// Remove an item from the shopping cart

/**
 * This shopping cart has a working ”+” button, 
 * but the ”–” button doesn’t do anything. 
 * You need to add an event handler to it so that pressing it 
 * decreases the count of the corresponding product. 
 * If you press ”–” when the count is 1, 
 * the product should automatically get removed from the cart. 
 * Make sure it never shows 0.
 */

const ShoppingCart2 = () => {
    const [products, setProducts] = useState(initialProducts);

    const handleIncreaseClick = (productId) => {
        setProducts(products.map(product => {
            if (product.id === productId) {
                return {...product, count: product.count+1};
            } else {
                return product;
            }
        }))
    }

    const handleDecreaseClick = (productId) => {
        let nextProducts = products.map(product => {
            if (product.id === productId) {
                return {...product, count: product.count-1};
            } else {
                return product;
            }
        })
        nextProducts = nextProducts.filter(p => p.count > 0);
        setProducts(nextProducts);
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}{' '}
                    (<b>{product.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(product.id)
                    }}>
                        +
                    </button>
                    <button onClick={() => {
                        handleDecreaseClick(product.id)
                    }}>
                        -
                    </button>
                </li>
            ))}
        </ul>
    )
}

// Fix the mutations using non-mutative methods

/**
 * In this example, all of the event handlers in App.js use mutation. 
 * As a result, editing and deleting todos doesn’t work. 
 * Rewrite handleAddTodo, handleChangeTodo, and handleDeleteTodo to 
 * use the non-mutative methods:
 */


let nextId = 3;
const initialTodos = [
    {id: 0, title: 'Buy bread', done: true},
    {id: 1, title: 'Eat boli', done: false},
    {id: 2, title: 'Sip alcohol', done: false}
];

const TaskApp = () => {
    const [todos, setTodos] = useState(initialTodos);

    const handleAddTodo = (title) => {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    const handleChangeTodo = (nextTodo) => {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t;
            }
        }))
    }

    const handleDeleteTodo = (todoId) => {
        setTodos(
            todos.filter(t => t.id !== todoId)
        );
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo}/>
            <TaskList 
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}

// useImmer for cleaner code
/**
 * Fix the mutations using Immer
 */

const TaskApp2 = () => {
    const [todos, updateTodos] = useImmer(initialTodos);

    const handleAddTodo = (title) => {
        updateTodos(draft => {
            draft.push({
                id: nextId++,
                title: title,
                done: false
            })
        })
    }

    const handleChangeTodo = (nextTodo) => {
        updateTodos(todos.map(todo => {
            if (todo.id === nextTodo.id) {
                return nextTodo;
            } else {
                return todo;
            }
        }))
    }

    const handleDeleteTodo = (todoId) => {
        updateTodos(
            todos.filter(t => t.id !== todoId)
        );
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo}/>
            <TaskList 
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}

export default ShoppingCart;
export {ShoppingCart2, TaskApp, TaskApp2} 