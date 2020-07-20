import { useEffect, useState } from "react";

const CartContents = () => {

    const [products, setProducts] = useState('');
    const [total, setTotal] = useState('');
    
    useEffect(() => {
		const getProducts = async () => {
            const items = getLocal();
            const sum = await items.map(item => (Number(item.item.price) * item.qty)).reduce((a, c) => { return a + c });
            await setTotal(sum);
            await setProducts(items);
            // await console.log(items);
		};

		getProducts();
    }, []);
    
    const getLocal = () => {
        return localStorage.getItem("woo-cart")
        ? JSON.parse(localStorage.getItem("woo-cart"))
        : [];
    };
    
    return (
        <div className="">
            <table className="table">
                <thead>
                    <tr className="table-active">
                        <th scope="col">Product</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {products 
                    ?
                        products.map((product) => (
                            <tr key={product.item.id}>
                                <td>{product.item.name} <strong>x</strong>{product.qty}</td>
                                <td>${Number(product.item.price) * product.qty}</td>
                            </tr>
                        ))
                    :
                    <tr>
                        <td>Loading....</td>
                        <td>Loading....</td>
                    </tr>
                    }
                    <tr>
                        <th className="table-active" scope="row">Total</th>
                        <td>${total}</td>
                    </tr>
                </tbody>
            </table>
       </div>
    );
};

export default CartContents;
