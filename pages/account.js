import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import Sidebar from "../components/Account/Sidebar";

const Account = withRouter( props => {

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
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#home">Account Details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#profile">Addresses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Orders</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">logout</a>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div className="tab-pane fade show active" id="home">
                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                            </div>
                            <div className="tab-pane fade" id="profile">
                                <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                            </div>
                            <div className="tab-pane fade" id="dropdown1">
                                <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
                            </div>
                            <div className="tab-pane fade" id="dropdown2">
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
