import Product from "./Product";
import {Row, Col} from 'react-bootstrap';
import Cart from './Cart'
import {createElement, useEffect, useState} from "react";

function Shop() {
    const [shopList, setShopList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setShopList([{id: 1, brand: 'Nike', price: '39.99$', model: 'Air Force', selected: false, 
                img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRrYpFZObDAsRhb7oPc_EX9Xecr6YFLpGklnBm6SNlF6Uu8JaoYl1Rh_xtHKuK---QTdNmj0EVL9e3m&usqp=CAc'},
                {id: 2, brand: 'Nike', price: '49.99$', model: 'Air Max', selected: false, 
                img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-aVxW-ZcxPLLLjK50FHBumvTl4ER_kh4cYyJjq0EvkL3tIpihyJ_BhnnzRueVq58o-S9ffBiHjdSq&usqp=CAc'},
                {id: 3, brand: 'Nike', price: '29.99$', model: 'Court', selected: false,
                img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZU4SXy_9dBwJfBxwfwhgIBRMUq7HwF-PJCeyZrpFhnd_awXonEYXYwZgn5779MqQFAVflPD5d5nB6FcwgBvttaoTeJa940EJlFegVTSFQPpUsR01LVuRfFg&usqp=CAc'},
                {id: 4, brand: 'Nike', price: '35.99$', model: 'Keds', selected: false,
                img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSwDGwN1RF1PSohsRADhmDWcTSJubX-am0fynK2XL1k3bNLHmM6c3W4fmBIOmew6MVieQcZYwi7OZKI&usqp=CAc'}])
        }, 1000)
    }, [])

    function addToCart(id) {
        let newList = shopList.map(product => {
            let newProduct = {...product}
            if(id === newProduct.id) {
                newProduct.selected = true;
            }
            return newProduct;
        })
        setShopList(newList);
    }

    function removeFromCart(id) {
        let newList = shopList.map(product => {
            let newProduct = {...product}
            if(id === newProduct.id) {
                newProduct.selected = false;
            }
            return newProduct;
        })
        setShopList(newList);
    }

    return (<>
        <Cart shopList={shopList.filter(el => el.selected)} removeFromCart={removeFromCart}/>
        <Row xs={1} md={4} className="g-4">
            {shopList.map(el => <Col key={el.id}>
                <Product
                product={el}
                addToCart={addToCart}
                removeFromCart={removeFromCart}/>
            </Col>)}
        </Row>

    </>)
}

export default Shop;