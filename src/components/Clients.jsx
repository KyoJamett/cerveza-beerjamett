export const Clients = () => {
  return (
    <div id="about" className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid bg-white w-100 mb-3"
                  data-aos="fade"
                  data-aos-delay="100"
                  src="images/gallery-01.jpg"
                  alt=""
                />
                <img
                  className="img-fluid bg-white w-50"
                  data-aos="fade"
                  data-aos-delay="200"
                  src="images/gallery-02.jpg"
                  alt=""
                />
                <img
                  className="img-fluid bg-white w-100 mt-3"
                  data-aos="fade"
                  data-aos-delay="400"
                  src="images/gallery-04.jpg"
                  alt=""
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid bg-white w-50 mb-3"
                  data-aos="fade"
                  data-aos-delay="300"
                  src="images/gallery-03.jpeg"
                  alt=""
                />
                <img
                  className="img-fluid bg-white w-100"
                  data-aos="fade"
                  data-aos-delay="400"
                  src="images/gallery-04.jpg"
                  alt=""
                />
                <img
                  className="img-fluid bg-white w-100 mb-3 mt-3"
                  data-aos="fade"
                  data-aos-delay="100"
                  src="images/gallery-01.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade" data-aos-delay="500">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-primary">
                Nuestro sello
              </p>
              <h1 className="display-6">
                Más que una cervecería, somos una comunidad de amantes de la
                buena cerveza.
              </h1>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100"
                  src="images/gallery-08.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-8">
                <h5>Producto 100% artesanal</h5>
                <p className="mb-0">
                  Cada cerveza que producimos es el resultado de incontables
                  horas de experimentación, pasión y el deseo de ofrecer algo
                  verdaderamente especial a nuestra comunidad.
                </p>
              </div>
            </div>
            <div className="border-top mb-4"></div>
            <div className="row g-3">
              <div className="col-sm-8">
                <h5>Calidad premium</h5>
                <p className="mb-0">
                  Creemos en el poder de reunir a las personas alrededor de una
                  buena cerveza y en crear momentos memorables.
                </p>
              </div>
              <div className="col-sm-4">
                <img
                  className="img-fluid bg-white w-100"
                  src="images/gallery-07.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
