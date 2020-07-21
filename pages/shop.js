import { withRouter } from 'next/router';
import clientConfig from '../client-config';
import axios from "axios";

import Layout from '../components/Layout';
import Product from '../components/Shop/Product';
import Pagination from '../components/Shop/Pagination';

// main shoping page
const Shop = withRouter( props => {

    const { products, total } = props;
    const pageTotal = Number(total["x-wp-totalpages"]);

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


Shop.getInitialProps = async (context) => {
    const page = Number(context.asPath.slice(context.asPath.length - 1));
    console.log('in shop', page)
    if(isNaN(page) || page === undefined) {
        const productList = await axios.get(`${clientConfig.siteURL}/getProducts/1`);
        const data = await productList.data;
        console.log(data)
        return data;
    } else {
        const productList = await axios.get(`${clientConfig.siteURL}/getProducts/${page}`);
        const data = await productList.data;
        console.log(data)
        return data;
    };
};
