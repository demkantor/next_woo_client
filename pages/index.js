import clientConfig from '../client-config';
import axios from "axios";
import gql from 'graphql-tag';
import client from '../components/ApolloClient';

import Shop from './shop';

const PRODUCTS_QUERY = gql`query {
    products(first: 20) {
        nodes {
            id
            productId
            averageRating
            slug
            description
            name
            image {
                uri
                srcSet
                title
                sourceUrl
            }
            link
            ... on SimpleProduct {
                price
                id
            }
            ... on VariableProduct {
                price
                id
            }
        }
    }
}`


const Index = ({ products }) => {
    console.log('client', products);

    return (
        <>
            {products.length
            ?
            <Shop 
                products={products} />
            :
            <h1>Loading...</h1>
            } 
        </>
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
    return data;
};

// Index.getInitialProps = async () => {
//     const productList = await client.query({ query: PRODUCTS_QUERY });
//     console.log(productList.data)
//     // const data = await productList.data.products.nodes
//     // return data;
// };

export default Index;
