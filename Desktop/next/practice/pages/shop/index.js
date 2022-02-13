import Product from "../../components/Product"

const Shop = () => {
    return (
        <>
            <div className="page-content my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
 
  <div className="products mb-3">
    <div className="row justify-content-start">
      <div className="col-6 col-md-4 col-lg-4 col-xl-3">
        <Product />
      </div>{/* End .col-sm-6 col-lg-4 col-xl-3 */}

      <div className="col-6 col-md-4 col-lg-4 col-xl-3">
        <Product />
      </div>{/* End .col-sm-6 col-lg-4 col-xl-3 */}

      <div className="col-6 col-md-4 col-lg-4 col-xl-3">
        <Product />
      </div>{/* End .col-sm-6 col-lg-4 col-xl-3 */}

      <div className="col-6 col-md-4 col-lg-4 col-xl-3">
        <Product />
      </div>{/* End .col-sm-6 col-lg-4 col-xl-3 */}

      <div className="col-6 col-md-4 col-lg-4 col-xl-3">
        <Product />
      </div>{/* End .col-sm-6 col-lg-4 col-xl-3 */}
    </div>{/* End .row */}
  </div>{/* End .products */}
  <nav aria-label="Page navigation">
    <ul className="pagination justify-content-center">
      <li className="page-item disabled">
        <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
          <span aria-hidden="true"><i className="icon-long-arrow-left" /></span>Prev
        </a>
      </li>
      <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item-total">of 6</li>
      <li className="page-item">
        <a className="page-link page-link-next" href="#" aria-label="Next">
          Next <span aria-hidden="true"><i className="icon-long-arrow-right" /></span>
        </a>
      </li>
    </ul>
  </nav>
</div>

      
      <aside className="col-lg-3 col-xl-5col order-lg-first">
  <div className="sidebar sidebar-shop">
    <div className="widget widget-categories">
      <h3 className="widget-title fw-bold">Categories</h3>{/* End .widget-title */}
      <div className="widget-body">
        <div className="accordion" id="widget-cat-acc">
          <div className="acc-item">
            <h5>Laptops &amp; Computers</h5>
          </div>{/* End .acc-item */}

          <div className="acc-item">
            <h5>Laptops &amp; Computers</h5>
          </div>{/* End .acc-item */}

          <div className="acc-item">
            <h5>Laptops &amp; Computers</h5>
          </div>{/* End .acc-item */}

          <div className="acc-item">
            <h5>Laptops &amp; Computers</h5>
          </div>{/* End .acc-item */}
          
        </div>{/* End .accordion */}
      </div>{/* End .widget-body */}
    </div>{/* End .widget */}
    
  </div>{/* End .sidebar sidebar-shop */}
</aside>{/* End .col-lg-3 */}
{/* End .row */}


    </div>{/* End .row */}
  </div>{/* End .container */}
</div>{/* End .page-content */}
{/* End .main */}

        </>
    )
}
export default Shop