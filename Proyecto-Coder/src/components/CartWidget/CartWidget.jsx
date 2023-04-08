import cart from "./assets/svg-gobbler.svg"
import  './CartWidget.css'

const CartWidget = () => {
    return(

        <div className="cartwidget">
            <img src={cart} alt="cart-widget" />
            0
        </div>
        
        )
}
export default CartWidget