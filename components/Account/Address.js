import { useState } from 'react';

const Address = () => {

    const [region, setRegion] = useState('');
    const [billing, setBilling] = useState(true);

    return (
        <form>
            <fieldset>
                <legend>Enter Shipping Address</legend>
                <div className="two-column">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name
                            <span className="red">*</span>
                        </label>
                        <input type="text" className="form-control" id="first-name" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name
                            <span className="red">*</span>
                        </label>
                        <input type="text" className="form-control" id="last-name" placeholder="" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="display-name">Company Name</label>
                    <input type="text" className="form-control" id="display-name" placeholder="(optional)" />
                </div>
                <div className="form-group">
                    <label htmlFor="region">State
                        <span className="red">*</span>
                    </label>
                    <select id="region" className="custom-select" onChange={(event)=>{setRegion(event.target.value)}}>
                        <option defaultValue value="">Select State</option>
                        <option value="2">Minnesota</option>
                        <option value="3">Canada</option>
                        <option value="4">Mexico</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="street-address">Street Address
                        <span className="red">*</span>
                    </label>
                    <input type="text" className="form-control" id="street-address" placeholder="House number and street name" />
                    <br />
                    <input type="text" className="form-control" id="street-address" placeholder="Apartment, suite, unit, etc. (optional)" />
                </div>
                <div className="form-group">
                    <label htmlFor="town-city">Town / City
                        <span className="red">*</span>
                    </label>
                    <input type="text" className="form-control" id="town-city" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">ZIP
                        <span className="red">*</span>
                    </label>
                    <input type="number" min="1" className="form-control" id="zip" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone
                        <span className="red">*</span>
                    </label>
                    <input type="text" className="form-control" id="phone" placeholder="ex: (555)555-5555" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email Address
                        <span className="red">*</span>
                    </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <fieldset className="form-group">
                    <legend>Checkboxes</legend>
                    <div className="form-check">
                        <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" onChange={()=>{setBilling(!billing)}} value={billing} checked={billing} />
                            Billing Address Is The Same As Shipping
                        </label>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Save Address</button>
            </fieldset>

            {billing 
            ?
            ""
            :
            <fieldset>
                <legend>Enter Billing Address</legend>
                <div className="two-column">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name
                            <span className="red">*</span>
                        </label>
                        <input type="text" className="form-control" id="first-name" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name
                            <span className="red">*</span>
                        </label>
                        <input type="text" className="form-control" id="last-name" placeholder="" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="display-name">Company Name</label>
                    <input type="text" className="form-control" id="display-name" placeholder="(optional)" />
                </div>
                <div className="form-group">
                    <label htmlFor="region">State
                        <span className="red">*</span>
                    </label>
                    <select id="region" className="custom-select" onChange={(event)=>{setRegion(event.target.value)}}>
                        <option defaultValue value="">Select State</option>
                        <option value="2">Minnesota</option>
                        <option value="3">Canada</option>
                        <option value="4">Mexico</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="street-address">Street Address
                        <span className="red">*</span>
                    </label>
                    <input type="text" className="form-control" id="street-address" placeholder="House number and street name" />
                    <br />
                    <input type="text" className="form-control" id="street-address" placeholder="Apartment, suite, unit, etc. (optional)" />
                </div>
                <div className="form-group">
                    <label htmlFor="town-city">Town / City
                        <span className="red">*</span>
                    </label>
                    <input type="text" className="form-control" id="town-city" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">ZIP
                        <span className="red">*</span>
                    </label>
                    <input type="number" min="1" className="form-control" id="zip" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone
                        <span className="red">*</span>
                    </label>
                    <input type="text" className="form-control" id="phone" placeholder="ex: (555)555-5555" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email Address
                        <span className="red">*</span>
                    </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary">Save Billing Address</button>
            </fieldset>
            }
        </form>
    );
};

export default Address;
