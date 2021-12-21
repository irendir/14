import {Button} from "react-bootstrap";
import './Cart.css';

function Cart({shopList, removeFromCart}) {
    return <div className="cart">
        Cart
            <ul>
                {shopList.map(el => <li key={el.id}>{el.brand} {el.model} ({el.price}) 
                <Button variant="danger" size="sm" 
                onClick={() => removeFromCart(el.id)}>remove</Button></li>)}
            </ul>
        </div>
}

export default Cart;