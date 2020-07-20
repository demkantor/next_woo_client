import Link from "next/link";

const CartTotal = () => {
    
    return (
        <div className="total-container">
            <div className="card border-light mb-3">
                <div className="card-header">Cart Totals</div>
                <div className="card-body">
                    <div className="two-column">
                        <h4 className="card-title">Subtotal</h4>
                        <h4 className="card-title">$250</h4>
                        <h4 className="card-title">Tax</h4>
                        <h4 className="card-title">$0</h4>
                        <h4 className="card-title">Total</h4>
                        <h4 className="card-title">$250</h4>
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
