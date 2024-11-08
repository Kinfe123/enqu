import React from "react";

export default function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="pt-5 mt-5 container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3 text-white">Company</h4>
              <a className="btn btn-link" href="/">
                About Us
              </a>
              <a className="btn btn-link" href="/">
                Contact Us
              </a>
              <a className="btn btn-link" href="/">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="/">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="/">
                FAQs &amp; Help
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3 text-white">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="pt-2 d-flex">
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3 text-white">Gallery</h4>
              <div className="pt-2 row g-2">
                <div className="col-4">
                  <img
                    className="p-1 img-fluid bg-light"
                    src="assets/img/package-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="p-1 img-fluid bg-light"
                    src="assets/img/package-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="p-1 img-fluid bg-light"
                    src="assets/img/package-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="p-1 img-fluid bg-light"
                    src="assets/img/package-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="p-1 img-fluid bg-light"
                    src="assets/img/package-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="p-1 img-fluid bg-light"
                    src="assets/img/package-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="mb-3 text-white">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="mx-auto position-relative"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="py-3 form-control border-primary w-100 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="top-0 py-2 mt-2 btn btn-primary position-absolute end-0 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="mb-3 text-center col-md-6 text-md-start mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  Enqu
                </a>
                , All Right Reserved. Designed By{" "}
                <a
                  className="border-bottom"
                  href="https://instagram.com/kinfish__"
                >
                  kinfish__
                </a>
              </div>
              <div className="text-center col-md-6 text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="/">Cookies</a>
                  <a href="/">Help</a>
                  <a href="/">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}
