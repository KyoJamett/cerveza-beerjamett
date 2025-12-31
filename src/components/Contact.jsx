export const Contact = () => {
  return (
    <>
      <section className="contact_section layout_padding">
        <div className="container-fluid">
          <div className="chocolate_section">
            <div className="heading_container">
              <h2 className="text-center">Nuestras redes</h2>
            </div>
          </div>
          <div className="row g-5 mb-5">
            <div
              className="col-md-4 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="btn-square mx-auto mb-3">
                <i
                  className="bi bi-instagram text-black"
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
              <p className="mb-2">@beerjamett</p>
            </div>
            <div
              className="col-md-4 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="btn-square mx-auto mb-3">
                <i
                  className="bi bi-whatsapp text-black"
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
              <p className="mb-2">+569 - 59421991</p>
              {/* <p className="mb-0">+012 345 67890</p> */}
            </div>
            <div
              className="col-md-4 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="btn-square mx-auto mb-3">
                <i
                  className="bi bi-envelope text-black"
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
              <p className="mb-2">mail@gmail.com</p>
            </div>
          </div>

          <div className="chocolate_section">
            <div className="row g-5 px-0" align="center">
              <div className="heading_container">
                <h2>Venga a visitarnos</h2>
              </div>
              <div className="map_container">
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468.12214979754725!2d-71.1756092522793!3d-32.48377284584005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968853f2247ab17f%3A0x1074edde18e0d5c9!2sBeerJamett!5e1!3m2!1ses!2scl!4v1766372614773!5m2!1ses!2scl"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
