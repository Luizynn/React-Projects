export default function CartItem({name, quantity, price, increaseQuantity, decreaseQuantity}) {
    return <li className="cart-item">
        <p>
            {name} -{quantity} x {price}
        </p>
        <p className="cart-item-actions">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
        </p>
    </li>
}