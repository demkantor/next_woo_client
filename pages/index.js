import Layout from '../components/Layout';
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
import axios from "axios";
import WooApi from "../api/api";

const Index = ({ products }) => {
    console.log(products)
    return (
        <div>
            <Layout>
                <h1>Heloooooo</h1>
            </Layout>   
        </div>
    );
};

// Index.getInitialProps = async () => {
//     const products = await axios.get(
//         `${WooApi.url.wc}products?per_page=10&consumer_key=${
//             WooApi.keys.consumerKey
//             }&consumer_secret=${WooApi.keys.consumerSecret}`
//     );

//     return {
//         products: products.data
//     };
// };

// Index.getInitialProps = async () => {
//     await console.log('getting props')
//     try {
//         const productList = await fetch(`${clientConfig.siteURL}/getProducts`)
//         await console.log(productList.data)
//         return {
//             products: productList.data
//         }
//     } catch (error) {
//         console.error('error fetching product list', error)
//     };
// };

Index.getInitialProps = async () => {
    const productList = await axios.get(`${clientConfig.siteURL}/getProducts`);
    const data = await productList.data;
    return {
        products: data
    };
};

export default Index;
