import logoImg from '../assets/logo.jpg'
import Button from '../UI/Button'
import CartContext from '../store/CartContext'
import { useContext } from 'react'

export default function Header(){
    const cartCtx = useContext(CartContext);
    const totalCartItems = cartCtx.items.reduce((totalNumber, item) => {
        return totalNumber + item.quantity
    }, 0)

    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logoImg} alt="logo image" />
                <h1>React food</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}