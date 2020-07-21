import Link from "next/link";
import Layout from '../components/Layout';

// const PRODUCTS_QUERY = gql`query {
//     products(first: 20) {
//         nodes {
//             id
//             productId
//             averageRating
//             slug
//             description
//             name
//             image {
//                 uri
//                 srcSet
//                 title
//                 sourceUrl
//             }
//             link
//             ... on SimpleProduct {
//                 price
//                 id
//             }
//             ... on VariableProduct {
//                 price
//                 id
//             }
//         }
//     }
// }`


const Index = ( ) => {


    return (
        <Layout>
            <div className="jumbotron">
                <h1 className="display-3">Welcome To Next Woo Press</h1>
                <p className="lead">Where shopping in fun, luxurious and secure! </p>
                <hr className="my-4" />
                <p>Proceed to the shop to browse our current selection</p>
                <p>Be sure to come back often to see what's new!</p>
                <p className="lead">
                    <Link href="/shop">
                        <a className="btn btn-primary btn-lg" role="button">Browse what's new</a>
                    </Link>
                </p>
            </div>
        </Layout>
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

// Index.getInitialProps = async (context) => {
//     console.log('in index', context)
//     const productList = await axios.get(`${clientConfig.siteURL}/getProducts/1`);
//     const data = await productList.data;
//     console.log(data)
//     return data;
// };

// Index.getInitialProps = async () => {
//     const productList = await client.query({ query: PRODUCTS_QUERY });
//     console.log(productList.data)
//     // const data = await productList.data.products.nodes
//     // return data;
// };

export default Index;
