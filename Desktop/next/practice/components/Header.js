import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import RegistrationModal from "./RegistrationModal"
import MobileMenu from "./MobileMenu"

const Header = () => {
    const router = useRouter()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [menuShow, setMenuShow] = useState('')

    useEffect(() => {
        if(router.route === '/' ) {
            setMenuShow('show')
        }else {
            setMenuShow('')
        }
    }, [router])

    const handler = () => {
        menuShow === 'show' ? setMenuShow('') : setMenuShow('show')
    }

    const [barShow, setBarShow] = useState(false)
    const bartogglerShow = () => setBarShow(true)
    const bartogglerClose = () => setBarShow(false)

    

    return (
        <>
            <header className="header header-10 header-intro-clearance">
                <div className="header-top py-4">
                    <div className="container">
                    <div className="header-left">
                        <a><i className="icon-phone" />Call: +0123 456 789</a>
                    </div>{/* End .header-left */}
                    <div className="header-right">
                        <Link href=''><a onClick={handleShow}>Sign in / Sign up</a></Link>
                    </div>{/* End .header-right */}
                    </div>{/* End .container */}
                </div>{/* End .header-top */}
                
                <div className="header-middle">
                    <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                        <span className="sr-only">Toggle mobile menu</span>
                        <i className="icon-bars" onClick={bartogglerShow} />
                        </button>
                        <Link href={'/'}>
                            <a className="logo">
                                <img src="assets/images/demos/demo-13/logo.png" alt="Molla Logo" width={105} height={25} />
                            </a>
                        </Link>
                    </div>{/* End .header-left */}
                    <div className="header-center">
                        <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                        <a href="#" className="search-toggle" role="button"><i className="icon-search" /></a>
                        <form action="#" method="get">
                            <div className="header-search-wrapper search-wrapper-wide">
                            <div className="select-custom">
                                <select id="cat" name="cat">
                                    <option value>All Departments</option>
                                    <option value={1}>Fashion</option>
                                    <option value={2}>- Women</option>
                                    <option value={3}>- Men</option>
                                </select>
                            </div>{/* End .select-custom */}
                            <label htmlFor="q" className="sr-only">Search</label>
                            <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                            <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                            </div>{/* End .header-search-wrapper */}
                        </form>
                        </div>{/* End .header-search */}
                    </div>
                           

                    <div className="header-right">
                        <div className="header-dropdown-link">
                            <div className="dropdown compare-dropdown">
                            <Link href={'/account'}>
                                <a className="wishlist-link">
                                    <i className="icon-user" />
                                    <span className="wishlist-txt">Account</span>
                                </a>
                            </Link>
                            
                            </div>{/* End .compare-dropdown */}
                            
                            <div className="dropdown cart-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart" />
                                <span className="cart-count">2</span>
                                <span className="cart-txt">Cart</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                <div className="product">
                                    <div className="product-cart-details">
                                    <h4 className="product-title">
                                        <a href="product.html">Beige knitted elastic runner shoes</a>
                                    </h4>
                                    <span className="cart-product-info">
                                        <span className="cart-product-qty">1</span>
                                        x $84.00
                                    </span>
                                    </div>{/* End .product-cart-details */}
                                    <figure className="product-image-container">
                                    <a href="product.html" className="product-image">
                                        <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                                    </a>
                                    </figure>
                                    <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                                </div>{/* End .product */}
                                <div className="product">
                                    <div className="product-cart-details">
                                    <h4 className="product-title">
                                        <a href="product.html">Blue utility pinafore denim dress</a>
                                    </h4>
                                    <span className="cart-product-info">
                                        <span className="cart-product-qty">1</span>
                                        x $76.00
                                    </span>
                                    </div>{/* End .product-cart-details */}
                                    <figure className="product-image-container">
                                    <a href="product.html" className="product-image">
                                        <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                                    </a>
                                    </figure>
                                    <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                                </div>{/* End .product */}
                                </div>{/* End .cart-product */}
                                <div className="dropdown-cart-total">
                                <span>Total</span>
                                <span className="cart-total-price">$160.00</span>
                                </div>{/* End .dropdown-cart-total */}
                                <div className="dropdown-cart-action">
                                <a href="cart.html" className="btn btn-primary">View Cart</a>
                                <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right" /></a>
                                </div>{/* End .dropdown-cart-total */}
                            </div>{/* End .dropdown-menu */}
                            </div>{/* End .cart-dropdown */}
                        </div>
                    </div>


                    </div>{/* End .container */}
                </div>{/* End .header-middle */}
                
                <div className="sticky-wrapper">
                    <div className="header-bottom sticky-header">
                        <div className="container">
                            <div className="header-left">
                                <div className="dropdown category-dropdown is-on show" data-visible="true">
                                    <a className="dropdown-toggle cursorPointer" onClick={handler} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-display="static" title="Browse Categories">
                                    Browse Categories
                                    </a>
                                    <div className={`dropdown-menu ${menuShow}`}>
                                    <nav className="side-nav">
                                        <ul className="menu-vertical sf-arrows sf-js-enabled" style={{touchAction: 'pan-y'}}>
                                        
                                        <li><a href="#">Home Appliances</a></li>
                                        <li><a href="#">Healthy &amp; Beauty</a></li>
                                        <li><a href="#">Shoes &amp; Boots</a></li>
                                        <li><a href="#">Travel &amp; Outdoor</a></li>
                                        <li><a href="#">Smart Phones</a></li>
                                        <li><a href="#">TV &amp; Audio</a></li>
                                        <li><a href="#">Gift Ideas</a></li>
                                        </ul>{/* End .menu-vertical */}
                                    </nav>{/* End .side-nav */}
                                    </div>{/* End .dropdown-menu */}
                                </div>{/* End .category-dropdown */}
                            </div>{/* End .col-lg-3 */}


                            <div className="header-center">
                                <nav className="main-nav">
                                    <ul className="menu sf-js-enabled" style={{touchAction: 'pan-y'}}>
                                        <li><Link href='/'><a className="sf-with-ul">Home</a></Link></li>
                                        <li><Link href='/shop'><a className="sf-with-ul">Shop</a></Link></li>
                                        <li><Link href='/about'><a className="sf-with-ul">About</a></Link></li>
                                        <li><Link href='/contact'><a className="sf-with-ul">Contact</a></Link></li>
                                    </ul>{/* End .menu */}
                                </nav>{/* End .main-nav */}
                            </div>{/* End .col-lg-9 */}
                            
                        </div>{/* End .container */}
                    </div>
                </div>{/* End .header-bottom */}
            </header>

            <MobileMenu show={barShow} bartogglerClose={bartogglerClose}/>
            <RegistrationModal show={show} handleClose={handleClose}/>
        </>
    )
}
export default Header