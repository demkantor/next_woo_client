import Link from "next/link";

// single product display
const Product = ({ product }) => {
    return (
        <div className="card mb-3" key={product.id}>
            <h3 className ="card-header">{product.name}</h3>
            <div className="card-body">
                <h5 className="card-title">${product.price}</h5>
                <h6 className="card-subtitle text-muted">{product.stock_status}!</h6>
            </div>
            <Link
                href={`/product?slug=${product.slug}`}
                as={`/products/${product.slug}`}>
                <a className="product-link">
                    <img 
                        className="product-img"
                        src={product.images[0].src}
                        alt={product.name} />
                </a>
            </Link>
            <div className="card-body">
                <div dangerouslySetInnerHTML={{ __html: product.description }} className="card-text"/>
            </div>
            <button type="button" className="btn btn-primary">Add To Cart!</button>
        </div>
    );
};

export default Product;
