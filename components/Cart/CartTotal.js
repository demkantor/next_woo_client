import { useEffect, useState } from "react";
import Link from "next/link";

const CartTotal = () => {

    const [subtotal, setSubtotal] = useState('');
    const [total, setTotal] = useState('');
    const [tax, setTax] = useState(0);
    
    useEffect(() => {
		const sumProducts = () => {
			const items = getLocal();
            const sum = items.map(item => (Number(item.item.price) * item.qty)).reduce((a, c) => { return a + c });
            setSubtotal(sum);
            setTotal(sum);
		};

		sumProducts();
	}, [setSubtotal, setTotal]);

    const getLocal = () => {
        return localStorage.getItem("woo-cart")
        ? JSON.parse(localStorage.getItem("woo-cart"))
        : [];
    };


    return (
        <div className="total-container">
            <div className="card border-light mb-3">
                <div className="card-header">Cart Totals</div>
                <div className="card-body">
                    <div className="two-column" onClick={()=>console.log(subtotal)}>
                        <h4 className="card-title">Subtotal</h4>
                        <h4 className="card-title">${subtotal}</h4>
                        <h4 className="card-title">Tax</h4>
                        <h4 className="card-title">${tax}</h4>
                        <h4 className="card-title">Total</h4>
                        <h4 className="card-title">${total}</h4>
                    </div>
                    <Link href="/checkout">
                        <button className="btn btn-primary center">Proceed To Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
