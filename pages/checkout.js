import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import Address from '../components/Checkout/Address';
import CartContents from '../components/Checkout/CartContents';

const Checkout = withRouter( props => {
    return (
        <Layout>
            <div className="indent">
                <legend className="jumbotron">Checkout</legend>
                <div className="two-column">
                    <Address />
                    <CartContents />
                </div>
            </div>
        </Layout>
    );
});

export default Checkout;
