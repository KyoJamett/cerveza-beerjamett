export const Carousel = () => {
  return (
    <>
      <section className="slider_section ">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h1>
                        Chocolate <br />
                        <span>Yummy</span>
                      </h1>
                      <a href="#">
                        <span>Read More</span>
                        <img src="images/white-arrow.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ms-auto">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h1>
                        Chocolate <br />
                        <span>Yummy</span>
                      </h1>
                      <a href="#">
                        <span>Read More</span>
                        <img src="images/white-arrow.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ms-auto">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail_box">
                      <h1>
                        Chocolate <br />
                        <span>Yummy</span>
                      </h1>
                      <a href="#">
                        <span>Read More</span>
                        <img src="images/white-arrow.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ms-auto">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a
            className="carousel-control-prev"
            href="#customCarousel1"
            role="button"
            data-bs-slide="prev"
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#customCarousel1"
            role="button"
            data-bs-slide="next"
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </section>
    </>
  );
};
