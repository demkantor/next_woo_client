// user chooses payment method in checkout section
const Method = () => {
    
    return (
        <fieldset>
            <legend>Payment Method</legend>
            <div className="form-group">
                <div className="custom-control custom-radio">
                    <input type="radio" id="credit-card" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="credit-card">Secure Credit Card</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="paypal" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="stripe" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="stripe">Stripe</label>
                </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block">Place Order</button>
        </fieldset>
    );
};

export default Method;
