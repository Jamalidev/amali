import { Row, Col, Tab, Container, Nav } from "react-bootstrap"
export default function Account () {
    return (
        <main className="main">
            <div className="page-content pt-4">
                <div className="dashboard">
                    <div className="container">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
                            <Row>
                                <Col md={4} lg={3}>
                                    <Nav variant="pills" className="flex-column align-items-start">
                                        <Nav.Item><Nav.Link eventKey="dashboard">Dashboard</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="orders">Orders</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="downloads">Downloads</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="address">Adresses</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="accountDetails">Account Details</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link>Sign Out</Nav.Link></Nav.Item>
                                    </Nav>
                                </Col>
                                <Col md={8} lg={9}>
                                    <Tab.Content>

                                        <Tab.Pane eventKey="dashboard">
                                            <p>Hello <span className="font-weight-normal text-dark">User</span> (not <span className="font-weight-normal text-dark">User</span>? <a href="#">Log out</a>) 
                                            <br />
                                            From your account dashboard you can view your <a href="#tab-orders" className="tab-trigger-link link-underline">recent orders</a>, manage your <a href="#tab-address" className="tab-trigger-link">shipping and billing addresses</a>, and <a href="#tab-account" className="tab-trigger-link">edit your password and account details</a>.</p>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="orders">
                                            <p>No order has been made yet.</p>
                                            <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right" /></a>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="downloads">
                                            <p>No downloads available yet.</p>
                                            <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right" /></a>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="address">
                                            <p>The following addresses will be used on the checkout page by default.</p>
                                            <div className="row">
                                            <div className="col-lg-6">
                                                <div className="card card-dashboard">
                                                <div className="card-body">
                                                    <h3 className="card-title">Billing Address</h3>{/* End .card-title */}
                                                    <p>User Name<br />
                                                    User Company<br />
                                                    John str<br />
                                                    New York, NY 10001<br />
                                                    1-234-987-6543<br />
                                                    yourmail@mail.com<br />
                                                    <a href="#">Edit <i className="icon-edit" /></a></p>
                                                </div>{/* End .card-body */}
                                                </div>{/* End .card-dashboard */}
                                            </div>{/* End .col-lg-6 */}
                                            <div className="col-lg-6">
                                                <div className="card card-dashboard">
                                                <div className="card-body">
                                                    <h3 className="card-title">Shipping Address</h3>{/* End .card-title */}
                                                    <p>You have not set up this type of address yet.<br />
                                                    <a href="#">Edit <i className="icon-edit" /></a></p>
                                                </div>{/* End .card-body */}
                                                </div>{/* End .card-dashboard */}
                                            </div>{/* End .col-lg-6 */}
                                            </div>{/* End .row */}
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="accountDetails">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                    <label>First Name *</label>
                                                    <input type="text" className="form-control" required />
                                                    </div>{/* End .col-sm-6 */}
                                                    <div className="col-sm-6">
                                                    <label>Last Name *</label>
                                                    <input type="text" className="form-control" required />
                                                    </div>{/* End .col-sm-6 */}
                                                </div>{/* End .row */}
                                                <label>Display Name *</label>
                                                <input type="text" className="form-control" required />
                                                <small className="form-text">This will be how your name will be displayed in the account section and in reviews</small>
                                                <label>Email address *</label>
                                                <input type="email" className="form-control" required />
                                                <label>Current password (leave blank to leave unchanged)</label>
                                                <input type="password" className="form-control" />
                                                <label>New password (leave blank to leave unchanged)</label>
                                                <input type="password" className="form-control" />
                                                <label>Confirm new password</label>
                                                <input type="password" className="form-control mb-2" />
                                                <button type="submit" className="btn btn-outline-primary-2">
                                                    <span>SAVE CHANGES</span>
                                                    <i className="icon-long-arrow-right" />
                                                </button>
                                            </form>
                                        </Tab.Pane>

                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    
                </div>{/* End .container */}
                </div>{/* End .dashboard */}
            </div>{/* End .page-content */}
            </main>

    )
}