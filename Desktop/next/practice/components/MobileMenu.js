import Link from "next/link"
import { Tabs, Tab } from "react-bootstrap";
const MobileMenu = ({show, bartogglerClose}) => {
    return (
        <>
            {/* Mobile Menu */}
            <div className={`mobile-menu-container mobile-menu-light ${show == true ? 'menuBarsActive' : ''}`}>
                <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close" onClick={bartogglerClose}><i className="icon-close" /></span>
                <form action="#" method="get" className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">Search</label>
                    <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                </form>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" variant="pills" className='justify-content-around'>
                    <Tab eventKey="home" title="Menu">
                        <nav className="mobile-nav">
                            <ul className="mobile-menu">
                                <li><Link href='/'><a className="sf-with-ul">Home</a></Link></li>
                                <li><Link href='/shop'><a className="sf-with-ul">Shop</a></Link></li>
                                <li><Link href='/about'><a className="sf-with-ul">About</a></Link></li>
                                <li><Link href='/contact'><a className="sf-with-ul">Contact</a></Link></li>
                            </ul>
                        </nav>{/* End .mobile-nav */}
                    </Tab>
                    <Tab eventKey="profile" title="Category">
                    <nav className="mobile-cats-nav">
                        <ul className="mobile-cats-menu">
                            <li><a className="mobile-cats-lead" href="#">Daily offers</a></li>
                            <li><a className="mobile-cats-lead" href="#">Gift Ideas</a></li>
                            <li><a href="#">Beds</a></li>
                            <li><a href="#">Lighting</a></li>
                            <li><a href="#">Sofas &amp; Sleeper sofas</a></li>
                            <li><a href="#">Storage</a></li>
                        </ul>{/* End .mobile-cats-menu */}
                    </nav>{/* End .mobile-cats-nav */}
                    </Tab>
                </Tabs>
                <div className="social-icons">
                    <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
                    <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
                    <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
                    <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
                </div>{/* End .social-icons */}
                </div>{/* End .mobile-menu-wrapper */}
            </div>{/* End .mobile-menu-container */}

        </>
    )
}
export default MobileMenu