// if a traditional number input is used then
// add in qty as props to give an easy max select amount

const QuantityBtn = () => {
    return (
        <div className="form-group">
            <select className="custom-select">
                <option defaultValue value="1">Quantity: One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
            </select>
        </div>
    );
};

export default QuantityBtn;
