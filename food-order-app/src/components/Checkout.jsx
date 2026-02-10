import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "../UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Input from "../UI/Input";
import UserProgressCtx from "../store/UserProgressContext";

export default function Checkout() {
    const checkoutCtx = useContext(CartContext)
    const userProgessCtx = useContext(UserProgressCtx)
    const cartTotal = checkoutCtx.items.reduce((totalValue, currItem) => totalValue + currItem.quantity * currItem.price, 0)

    function closeCheckout(){
        userProgessCtx.closeCheckout()
    }

    return (
        <Modal open={userProgessCtx.progress === 'checkout'} onClose={closeCheckout}>
            <form>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                <Input label="Full Name" type="text" id="full-name"/>
                <Input label="E-mail Adress" type="text" id="email"/>
                <Input label="Street" type="text" id="street"/>

                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code"/>
                    <Input label="City" type="text" id="city"/>
                </div>

                <p>
                    <Button type="button"textOnly onClick={closeCheckout}> Close </Button>
                    <Button> Submit Form</Button>
                </p>
            </form>
        </Modal>
    )
}