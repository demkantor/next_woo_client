const AddToCartBtn = ({ addItem }) => {
    
    return (
        <button 
            type="button" 
            className="btn btn-primary"
            onClick={addItem}>
                Add To Cart
        </button>
    );
};

export default AddToCartBtn;
