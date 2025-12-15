export const Info = () => {
  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row info_form_social_row">
            <div className="col-md-8 col-lg-9">
              <div className="info_form">
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="social_box">
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row info_main_row">
            <div className="col-md-6 col-lg-3">
              <div className="info_links">
                <h4>Menu</h4>
                <div className="info_links_menu">
                  <a href="index.html">Home</a>
                  <a href="about.html">About</a>
                  <a href="chocolate.html">Chocolates</a>
                  <a href="testimonial.html">Testimonial</a>
                  <a href="contact.html">Contact us</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_insta">
                <h4>Instagram</h4>
                <div className="insta_box">
                  <div className="img-box">
                    <img src="images/insta-img.png" alt="" />
                  </div>
                  <p>long established fact that a reader</p>
                </div>
                <div className="insta_box">
                  <div className="img-box">
                    <img src="images/insta-img.png" alt="" />
                  </div>
                  <p>long established fact that a reader</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_detail">
                <h4>Company</h4>
                <p className="mb-0">
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as
                  opposed to
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Contact Us</h4>
              <div className="info_contact">
                <a href="">
                  <i className="fa-solid fa-map-marker-alt"></i>

                  <span>Location</span>
                </a>
                <a href="">
                  <i className="fa-solid fa-phone"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
