import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";

const Header = () => {
    
    const [ toggleHamburger, setToggleHamburger ] = useState(true);
    const router = useRouter();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link href="/">
                <a className="navbar-brand">
                    NEXT WOO PRESS
                </a>
            </Link>
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
                    <li className={`nav-item ${router.pathname == "/shop" ? "active" : ""}`}>
                        <Link href="/shop">
                            <a className="nav-link">Shop</a>
                        </Link>
                    </li>
                    <li className={`nav-item ${router.pathname == "/categories" ? "active" : ""}`}>
                        <Link href="/categories">
							<a className="nav-link">Categories</a>
						</Link>
                    </li>
                    <li className={`nav-item ${router.pathname == "/account" ? "active" : ""}`}>
                        <Link href="/account">
							<a className="nav-link">My Account</a>
						</Link>
					</li>
                    <li className={`nav-item ${router.pathname == "/cart" ? "active" : ""}`}>
                        <Link href="/cart">
							<a className="nav-link">Cart</a>
						</Link>
					</li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
