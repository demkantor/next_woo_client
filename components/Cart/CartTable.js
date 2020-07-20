import { useEffect, useState } from "react";

const CartTable = () => {

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
    
    const removeItem = (id) => {
        console.log(id);
        let items = getLocal();
        items = items.filter((item) => item.item.id !== id);
        localStorage.setItem("woo-cart", JSON.stringify(items));
        setProducts(items);
    };

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {products 
                ?
                products.map((product) => (
                    <tr key={product.item.id}>
                        <td>
                            <div
                                className="highlight"
                                onClick={()=>removeItem(product.item.id)}
                                data-toggle="tooltip" 
                                data-placement="right" 
                                title="Remove Item"
                                data-original-title="Tooltip on right">
                                    <i className="fas fa-times-circle"></i>
                            </div>
                        </td>
                        <td className="sml-img-container">
                            <img src={product.item.images[0].src} alt={product.item.name} className="product-img" />
                        </td>
                        <td>{product.item.name}</td>
                        <td>${product.item.price}</td>
                        <td>{product.qty}</td>
                        <td>${product.item.price * product.qty} </td>
                    </tr>
                ))
                :
                <>
                    <tr>
                        <td>Loading.......</td>
                        <td>Loading.......</td>
                        <td>Loading.......</td>
                        <td>Loading.......</td>
                        <td>Loading.......</td>
                        <td>Loading.......</td>
                    </tr>
                </>
                }
            </tbody>
        </table>
    );
};

export default CartTable;
