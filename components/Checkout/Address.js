const Address = () => {
    
    return (
        <div className="indent">

            <fieldset>
                <input type="checkbox" />
                {" "}
                <label>Use Billing Address For Shipping</label>
            </fieldset>

            <div className="margin4">
                <legend>Billing Address</legend>
                <p>123 Fake St. S.
                    <br/>
                Minneapolis, MN 55416</p>
            </div>
            
            <div className="margin4">
                <legend>Shipping Address</legend>
                <p>123 Fake St. S.
                    <br/>
                Minneapolis, MN 55416</p>
            </div>
            <br/>
            <button type="button" className="btn btn-link edit-underline">Edit Shipping</button>
        </div>
    );
};

export default Address;
