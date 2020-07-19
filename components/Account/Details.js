const Profile = () => {
    return (
        <form>
            <fieldset>
                <legend>Legend</legend>
                <div className="two-column">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name
                            <span className="red">*</span>
                        </label>
                        <input type="text" className="form-control" id="first-name" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last name
                            <span className="red">*</span>
                        </label>
                        <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="display-name">Display Name
                        <span className="red">*</span>
                    </label>
                    <input type="text" className="form-control" id="display-name" placeholder="Display Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email Address
                        <span className="red">*</span>
                    </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <fieldset>
                    <legend>Password Change</legend>
                    <div className="indent">
                        <div className="form-group">
                            <label htmlFor="current-password">Current Password</label>
                            <input type="password" className="form-control" id="current-password" placeholder="(leave blank to leave unchanged)" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-password">New Password</label>
                            <input type="password" className="form-control" id="new-password" placeholder="(leave blank to leave unchanged)" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-new-password">Confirm New Password</label>
                            <input type="password" className="form-control" id="confirm-new-password" placeholder="(leave blank to leave unchanged)" />
                        </div>
                    </div>
                </fieldset>
                
                <fieldset>
                    <div className="form-group">
                    <small id="fileHelp" className="form-text text-muted">Choose a Personal Avatar (optional)</small>
                        <div className="input-group mb-3">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputfield" />
                                <label className="custom-file-label" htmlFor="inputfield">Choose Image</label>
                            </div>
                            <div className="input-group-append">
                                <span className="input-group-text" id="">Upload</span>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-primary">Save Changes</button>
            </fieldset>

        </form>
    );
};

export default Profile;
