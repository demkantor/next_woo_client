import { useEffect, useState } from "react";

const Sidebar = () => {

    const [products, setProducts] = useState('');
    
    useEffect(() => {
		const getProducts = async () => {
            const items = getLocal();
            await setProducts(items);
            await console.log(items);
		};

		getProducts();
    }, []);
    
    const getLocal = () => {
        return localStorage.getItem("woo-cart")
        ? JSON.parse(localStorage.getItem("woo-cart"))
        : [];
    };

    return (
        <div className="sidebar">
            <legend>Your Cart</legend>
            {products
            ?
                products.map(product => (
                    <img 
                        key={product.item.id} 
                        className="product-img pad1" 
                        src={product.item.images[0].src} 
                        alt={product.item.name} />
                ))
            :
                <div>Loading....</div>
            }
        </div>
    )
};

export default Sidebar;
