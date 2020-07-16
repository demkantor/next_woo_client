const next = require('next');
const express = require('express');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const wooConfig = require('./wooConfig');

const api = new WooCommerceRestApi({
    url: wooConfig.url,
    consumerKey: wooConfig.consumerKey,
    consumerSecret: wooConfig.consumerSecret,
    version: "wc/v3"
});

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        // server.get( '/getProducts', (req, response) => {
        //     console.log('here!')
        //     api.get('products', function(err, data, res) {
        //         response.json( JSON.parse(res));
        //     }).catch(err => console.error(err));
        // });
        server.get( '/getProducts', async (req, res) => {
            console.log('all products server!');
            try {
                // const products = await api.get('products', {per_page: 1});
                const products = await api.get('products');
                // console.log(products.data)
                return res.status(200).json({ products: products.data });
            } catch (error) {
                console.error('error fetching products', error);
            }
        });
        // server.get("/products/:slug", (req, res) => {
        //     const actualPage = "/product";
        //     const queryParams = { slug: req.params.slug };
        //     app.render(req, res, actualPage, queryParams);
        // });
        server.get( '/getSingleProduct/:query', async (req, res) => {
            console.log('single product server!', req.params.query);
            try {;
                const product = await api.get(`products?${req.params.query}`);
                console.log(product.data)
                return res.status(200).json({ product: product.data });
            } catch (error) {
                console.error('error fetching products', error);
            }
        });

        server.get( '*', (req,res) => {
            return handle(req, res);
        });

        server.listen( port, err => {
            if(err) {
                throw err;
            };
            console.log(`Server up on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('error with server', err);
        process.exit(1);
    });