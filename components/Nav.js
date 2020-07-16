import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {

    const [ toggleHamburger, setToggleHamburger ] = useState(true);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Next Woo</a>
            <button className="navbar-toggler transition" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarColor01" 
                    aria-controls="navbarColor01" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={()=>setToggleHamburger(!toggleHamburger)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`navbar-collapse transition ${toggleHamburger ? "collapse" : ""}`} id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link href="/categories">
							<a className="nav-link">Categories</a>
						</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/account">
							<a className="nav-link">My Account</a>
						</Link>
					</li>
                    <li className="nav-item">
                        <Link href="/cart">
							<a className="nav-link">Cart</a>
						</Link>
					</li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
