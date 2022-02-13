const Contact = () => {
    return (
        <>
        <main className="main">
  <div className="container pt-3">
    <div className="page-header page-header-big text-center" style={{backgroundImage: 'url("assets/images/contact-header-bg.jpg")'}}>
      <h1 className="page-title text-white">Contact us<span className="text-white">keep in touch with us</span></h1>
    </div>{/* End .page-header */}
  </div>{/* End .container */}
  <div className="page-content pb-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-2 mb-lg-0">
          <h2 className="title mb-1">Contact Information</h2>{/* End .title mb-2 */}
          <p className="mb-3">Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
          <div className="row">
            <div className="col-sm-7">
              <div className="contact-info">
                <h3>The Office</h3>
                <ul className="contact-list">
                  <li>
                    <i className="icon-map-marker" />
                    70 Washington Square South New York, NY 10012, United States
                  </li>
                  <li>
                    <i className="icon-phone" />
                    <a href="tel:#">+92 423 567</a>
                  </li>
                  <li>
                    <i className="icon-envelope" />
                    <a href="mailto:#">info@Molla.com</a>
                  </li>
                </ul>{/* End .contact-list */}
              </div>{/* End .contact-info */}
            </div>{/* End .col-sm-7 */}
            <div className="col-sm-5">
              <div className="contact-info">
                <h3>The Office</h3>
                <ul className="contact-list">
                  <li>
                    <i className="icon-clock-o" />
                    <span className="text-dark">Monday-Saturday</span> <br />11am-7pm ET
                  </li>
                  <li>
                    <i className="icon-calendar" />
                    <span className="text-dark">Sunday</span> <br />11am-6pm ET
                  </li>
                </ul>{/* End .contact-list */}
              </div>{/* End .contact-info */}
            </div>{/* End .col-sm-5 */}
          </div>{/* End .row */}
        </div>{/* End .col-lg-6 */}
        <div className="col-lg-6">
          <h2 className="title mb-1">Got Any Questions?</h2>{/* End .title mb-2 */}
          <p className="mb-2">Use the form below to get in touch with the sales team</p>
          <form action="#" className="contact-form mb-3">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="cname" className="sr-only">Name</label>
                <input type="text" className="form-control" id="cname" placeholder="Name *" required />
              </div>{/* End .col-sm-6 */}
              <div className="col-sm-6">
                <label htmlFor="cemail" className="sr-only">Email</label>
                <input type="email" className="form-control" id="cemail" placeholder="Email *" required />
              </div>{/* End .col-sm-6 */}
            </div>{/* End .row */}
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="cphone" className="sr-only">Phone</label>
                <input type="tel" className="form-control" id="cphone" placeholder="Phone" />
              </div>{/* End .col-sm-6 */}
              <div className="col-sm-6">
                <label htmlFor="csubject" className="sr-only">Subject</label>
                <input type="text" className="form-control" id="csubject" placeholder="Subject" />
              </div>{/* End .col-sm-6 */}
            </div>{/* End .row */}
            <label htmlFor="cmessage" className="sr-only">Message</label>
            <textarea className="form-control" cols={30} rows={4} id="cmessage" required placeholder="Message *" defaultValue={""} />
            <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
              <span>SUBMIT</span>
              <i className="icon-long-arrow-right" />
            </button>
          </form>{/* End .contact-form */}
        </div>{/* End .col-lg-6 */}
      </div>{/* End .row */}
    </div>{/* End .container */}
  </div>{/* End .page-content */}
</main>

        </>
    )
}
export default Contact