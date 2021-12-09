import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { removeFruit, clearCart } from "containers/App/storage/fruitSlice";
import { getFruitCards } from "containers/Shop/Shop"; 
import { NiceButton } from "components/NiceButton";
export const Cart = () => {
    const fruitList = useSelector((state) => state.fruitInCart.value)
    const totalPrice = useSelector((state) =>
        state.fruitInCart.value.reduce((total, fruit) => (total + fruit.price), 0)
    )
    const dispatch = useDispatch();

    if (fruitList.length === 0) {
        return (<h1>Cart is empty</h1>)
    }

    return (
        <React.Fragment>
                <h2>Total price: {totalPrice}</h2>
                <button onClick={() => {dispatch(clearCart())}}>
                    Clear cart
                </button>
            <div style={{display:"flex", flexDirection:"row"}}>
                {

                    getFruitCards(fruitList, (fruit) =>
                        (<NiceButton onClick={() => {dispatch(removeFruit(fruit.id))}}>
                            Remove
                        </NiceButton>)
                    )
                }
            </div>
        </React.Fragment>
    )
}
