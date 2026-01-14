export const Info = () => {
  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row info_main_row">
            <div className="col-md-6 col-lg-3">
              <h4>Contacto</h4>
              <div className="info_contact">
                <a href="">
                  <i className="fa-solid fa-map-marker-alt"></i>

                  <span>Tobías Cabrera, sitio 12, La Ligua</span>
                </a>
                <a href="">
                  <i className="fa-solid fa-phone"></i>
                  <span>+569 - 9488 2951</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope"></i>
                  <span>beerjamett@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_detail">
                <h4>Horarios</h4>

                <p className="mb-1">Lunes - Viernes</p>
                <h6 className="text-light">09:00 am - 07:00 pm</h6>
                <p className="mb-1">Sábado</p>
                <h6 className="text-light">09:00 am - 12:00 pm</h6>
                <p className="mb-1">Domingo</p>
                <h6 className="text-light">Cerrado</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_links">
                <h4>Menu</h4>
                <div className="info_links_menu">
                  <a href="index.html">Home</a>
                  <a href="about.html">Nosotros</a>
                  <a href="chocolate.html">Cervezas</a>
                  <a href="testimonial.html">Nuestros clientes</a>
                  <a href="contact.html">Contacto</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_insta">
                <h4>Nuestras redes</h4>
                <div className="social_box">
                  <a href="">
                    <i
                      className="fa-brands fa-facebook-f"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
