import { useState } from 'react';
import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import Sidebar from "../components/Account/Sidebar";
import Address from '../components/Account/Address';

const Account = withRouter( props => {

    const [tabs, setTabs] = useState({
        home: true,
        details: false,
        address: false,
        orders: false,
        login: false
    });

    const activate = (event) => {
        setTabs({
            home: false,
            details: false,
            address: false,
            orders: false,
            login: false
        });
        setTabs({
            [event.target.dataset.toggle]: true
        });
    }

    return (
        <Layout>
            <div className="account-wrapper">
                <h3>
                    Welcome *user name*
                    <small className="text-muted"> not you? <a>login here...</a></small>
                </h3>
                <div className="two-column-offset">
                    <Sidebar />
                    <div className="account-tabs">
                        <ul className="nav nav-tabs">
                            <li className="nav-item" onClick={activate}>
                                <a className={`nav-link ${tabs.home ? "active" : ""}`} data-toggle="home" href="#/landing">Home</a>
                            </li>
                            <li className="nav-item" onClick={activate}>
                                <a className={`nav-link ${tabs.details ? "active" : ""}`} data-toggle="details" href="#/details">Profile</a>
                            </li>
                            <li className="nav-item" onClick={activate}>
                                <a className={`nav-link ${tabs.address ? "active" : ""}`} data-toggle="address" href="#/address">Address</a>
                            </li>
                            <li className="nav-item" onClick={activate}>
                                <a className={`nav-link ${tabs.orders ? "active" : ""}`} data-toggle="orders" href="#/orders">Orders</a>
                            </li>
                            <li className="nav-item" onClick={activate}>
                                <a className={`nav-link ${tabs.login ? "active" : ""}`} data-toggle="login" href="#/login">Logout</a>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div className={`tab-pane fade ${tabs.home ? "show active" : ""}`} id="home">
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </div>
                            <div className={`tab-pane fade ${tabs.details ? "show active" : ""}`} id="profile">
                                <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                            </div>
                            <div className={`tab-pane fade ${tabs.address ? "show active" : ""}`} id="address">
                                <Address />
                            </div>
                            <div className={`tab-pane fade ${tabs.orders ? "show active" : ""}`} id="orders">
                                <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
                            </div>
                            <div className={`tab-pane fade ${tabs.login ? "show active" : ""}`} id="login">
                                <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
	);
});


export default Account;
