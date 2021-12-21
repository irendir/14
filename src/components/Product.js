import {Button, Card} from "react-bootstrap";

function Product({product, addToCart, removeFromCart}) {
    return (<Card>
        <Card.Img style={{maxHeight: '250px', minWidth: '200px'}} variant="top" src={product.img} />
        <Card.Body>
            <Card.Title>{product.brand} {product.model}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Card.Title className={"text-danger"}>{product.price}</Card.Title>
            {product.selected ? <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove from Cart</Button>
                : <Button variant="success" onClick={() => addToCart(product.id)}>Add to Cart</Button>}
        </Card.Body>
    </Card>)
}

export default Product;