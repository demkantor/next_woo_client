import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import Link from "next/link";
import axios from "axios";
import clientConfig from '../client-config';
import WooApi from "../api/api";
import AddToCartButton from "../components/AddToCartButton";

const Product = withRouter( props => {
	const { slug } = props.router.query;
	const { product } = props;

	const [item, setItem] = useState('');

	useEffect(() => {
		const getProduct = async () => {
			console.log('client', slug, product);
			const items = await product.filter((item) => item.slug === slug);
			await setItem(items[0]);
			await console.log(items[0])
		};

		getProduct();
	}, []);

	return (

			<Layout>
				<div className="btn-container">
					<Link href="/">
						<a className="link">
							<button type="button" className="btn btn-primary">Back</button>
						</a>
					</Link>
				</div>  
				{ item ? (
					<div className="single-product">
						<div className="product card bg-light mb-3 p-5">
							<div className="card-header">{ item.name }</div>
							<div className="card-body">
								<h4 className="card-title">{ item.name }</h4>
								<div className="two-column">
									<img src={ item.images[0].src } alt={ item.name } className="product-img" />
									<div className="call-to-act">
										<h1>${item.price}</h1>
										<h6 className="card-subtitle text-muted">{item.stock_status}!</h6>
										<AddToCartButton />
									</div>
									
								</div>
								<p
									dangerouslySetInnerHTML={ {
										__html: item.description,
									} }
									className="card-text"/>

								{/* <AddToCartButton product={ item }/> */}

							</div>
						</div>
					</div>
					
				) 
				:
					<h1>Loading...</h1> 
				}
			</Layout>

	)
});



Product.getInitialProps = async ({ query }) => {
	console.log('client', query.slug);
    const singleProduct = await axios.get(`${clientConfig.siteURL}/getSingleProduct/${query.slug}`);
    const data = await singleProduct.data;
    return data;
};

// Product.getInitialProps = async ({ query }) => {
//     const url = `${WooApi.url.wc}products?slug=${query.slug}&consumer_key=${
//       WooApi.keys.consumerKey
//     }&consumer_secret=${WooApi.keys.consumerSecret}`;
//     const response = await axios.get(url);
//     console.log(response);
//     if (response.data) {
//       return { product: response.data[0] };
//     } else {
//       return { product: null };
//     }
//   };


export default Product;
