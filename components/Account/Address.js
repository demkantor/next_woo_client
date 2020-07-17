const Address = () => {
    return (
        <form>
            <fieldset>
                <legend>Legend</legend>
                <div className="two-column">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" className="form-control" id="first-name" placeholder="first name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" className="form-control" id="last-name" placeholder="last name" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="display-name">Display Name</label>
                    <input type="text" className="form-control" id="display-name" placeholder="display name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleSelect1">Example select</label>
                    <select className="form-control" id="exampleSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <fieldset className="form-group">
                    <legend>Checkboxes</legend>
                    <div className="form-check">
                        <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" value="" checked="" />
                            Option one is this and that—be sure to include why it's great
                        </label>
                    </div>
                    <div className="form-check disabled">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" value="" disabled="" />
                            Option two is disabled
                        </label>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile02" />
                            <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text" id="">Upload</span>
                        </div>
                    </div>
                    <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                </div>
            </fieldset>
        </form>
    );
};

export default Address;
