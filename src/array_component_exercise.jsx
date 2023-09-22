import { useState } from "react";

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

    const handleIncreaseClick = (prodctId) => {
        setProducts(products.map(product => {
            if (product.id === prodctId) {
                return {...product, count: product.count+1};
            } else {
                return product;
            }
        }))
    }

    const handleDecreaseClick = (productId) => {
        setProducts(products.map(product => {
            if (product.id === productId) {
                return {...product, count: product.count-1}
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

export default ShoppingCart;
export {ShoppingCart2};