export const About = () => {
  return (
    <>
      <section className="about_section layout_padding ">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container pb-3">
                  <h2>Quienes somos</h2>
                </div>
                <p>
                  Más que una cervecería, en Beerjamett somos una comunidad de
                  amantes de la buena cerveza. Fundada en La Ligua, nuestra
                  misión es compartir la experiencia de la cerveza artesanal de
                  calidad con cada persona que cruza nuestras puertas. Creemos
                  en el poder de reunir a las personas alrededor de una buena
                  cerveza y en crear momentos memorables. Cada cerveza que
                  producimos es el resultado de incontables horas de
                  experimentación, pasión y el deseo de ofrecer algo
                  verdaderamente especial a nuestra comunidad.
                </p>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <span>Leer más</span>
                  <img
                    src="images/color-arrow.png"
                    alt="arrow"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img
                  src="images/about-img.jpg"
                  alt="aboutUs"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
