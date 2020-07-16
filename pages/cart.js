import Layout from "../components/Layout";
import { withRouter } from 'next/router';


const Cart = withRouter( props => {

    console.log('client side - cart', props)

	return (
		<Layout>
			<div className="jumbotron">
                <h1 className="display-3">Your Cart</h1>
                <p className="lead">Thank you for shopping with Next Woo! </p>
                <hr className="my-4" />
                <p>Proceed to Checkout to complete your purchase</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Continue To Checkout</a>
                </p>
                </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div
                                className="highlight"
                                data-toggle="tooltip" 
                                data-placement="right" 
                                title="Remove Item" 
                                data-original-title="Tooltip on right">
                                    <i className="fas fa-times-circle"></i>
                            </div>
                        </td>
                        <td>Product image</td>
                        <td>Product name</td>
                        <td>Price per unit</td>
                        <td>quantity select box</td>
                        <td>price per unit X quantity</td>
                    </tr>
                    <tr className="table-primary">
                    <td>
                            <div
                                className="highlight"
                                data-toggle="tooltip" 
                                data-placement="right" 
                                title="Remove Item" 
                                data-original-title="Tooltip on right">
                                    <i className="fas fa-times-circle"></i>
                            </div>
                        </td>
                        <td>Product image</td>
                        <td>Product name</td>
                        <td>Price per unit</td>
                        <td>quantity select box</td>
                        <td>price per unit X quantity</td>
                    </tr>
                </tbody>
            </table>
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
                        <button className="btn btn-primary center">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
		</Layout>
	);
});


export default Cart;
