import Link from "next/link";

const CartHeader = () => {
    
    return (
        <div className="jumbotron">
            <h1 className="display-3">Your Cart</h1>
            <p className="lead">Thank you for shopping with Next Woo! </p>
            <hr className="my-4" />
            <p>Proceed to Checkout to complete your purchase</p>
            <p className="lead">
                <Link href="/checkout">
                    <a className="btn btn-primary btn-lg" role="button">Continue To Checkout</a>
                </Link>
            </p>
        </div>
    );
};

export default CartHeader;
