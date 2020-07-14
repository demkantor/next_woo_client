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

        server.get( 'getProducts', (req, res) => {
            api.get('products', function(err, data, res) {
                response.json( JSON.parse(res));
            });
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