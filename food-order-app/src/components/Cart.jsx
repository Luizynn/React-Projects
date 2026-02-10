import Modal from "../UI/Modal"
import { useContext } from "react"
import CartContext from "../store/CartContext"
import { currencyFormatter } from "../util/formatting"
import Button from "../UI/Button"
import UserProgressCtx from "../store/UserProgressContext"
import CartItem from "./CartItem"

export default function Cart(){
    const cartCtx = useContext(CartContext)
    const userProgressContext = useContext(UserProgressCtx)

    function handleCloseCart () {
        userProgressContext.closeCart()
    }

    const cartTotal = cartCtx.items.reduce((totalValue, currItem) => totalValue + currItem.quantity * currItem.price, 0)
    
    return(
        <Modal className="cart" open={userProgressContext.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {
                    cartCtx.items?.map((item) => (
                        <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} increaseQuantity={() => cartCtx.addItem} decreaseQuantity={() => cartCtx.removeItem}/>
                    ))
                }
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                <Button>Go to checkout</Button>
            </p>
        </Modal>
    )
}