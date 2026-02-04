import { createContext, useState } from "react";

const UserProgressCtx = createContext({
    progress: '',
    showCart: () => {},
    closeCart: () => {},
    showCheckout: () => {},
    closeCheckout: () => {}
})

export function UserProgressProvider({children}){
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function closeCart() {
        setUserProgress('')
    }

    function showCheckout() {
        setUserProgress('checkout')
    }

    function closeCheckout() {
        setUserProgress('')
    }

    const userProgressContext = {
        progress: userProgress,
        showCart,
        closeCart,
        showCheckout,
        closeCheckout
    }

    return (
        <UserProgressCtx value={userProgressContext}>{children}</UserProgressCtx>
    )
}

export default UserProgressCtx