import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import CartHeader from "../components/Cart/CartHeader";
import CartTotal from "../components/Cart/CartTotal";
import CartTable from "../components/Cart/CartTable";


// cart page to be displayed before user makes purchase
const Cart = withRouter( props => {

    console.log('client side - cart', props);

	return (
		<Layout>
			<CartHeader />
            <CartTable />
            <CartTotal />
		</Layout>
	);
});


export default Cart;
