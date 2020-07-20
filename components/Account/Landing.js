const Landing = () => {
    return (
        <div className="">
            <legend>About You</legend>
            <h1>Welcome *user_name*</h1>
            <small>Not *user_name*? <button type="button" className="btn btn-link">Login Here</button></small>
        
            <div className="center">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib"
                    alt="user-avatar"
                    className="avatar-big" />
            </div>        
        </div>
    )
};

export default Landing;