import { withRouter } from 'next/router';
import clientConfig from '../client-config';
import axios from "axios";

import Layout from '../components/Layout';
import Product from '../components/Shop/Product';
import Pagination from '../components/Shop/Pagination';

const Shop = withRouter( props => {

    const { products, pageTotal } = props;

    return (
        <Layout>
            <div className="product-container">
                
                {products.map((product, i) => (
                    <Product key={i} product={product} />
                ))}

            </div>
            <Pagination 
                pageTotal={pageTotal} />
        </Layout>
    );
});

export default Shop;


Shop.getInitialProps = async () => {
    const productList = await axios.get(`${clientConfig.siteURL}/getProducts`);
    const data = await productList.data;
    return data;
};
