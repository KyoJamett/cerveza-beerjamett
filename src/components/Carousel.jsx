import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useState } from "react";

const items = [
  {
    name: "Cerveza",
    nameSpan: "Beerjamett",
    img: "images/slider-img.png",
    bgImage: "images/slider-bg-01.jpg", // Nueva imagen de fondo
  },
  {
    name: "Tradición",
    nameSpan: "Liguana",
    img: "images/slider-img.png",
    bgImage: "images/slider-bg-02.jpg", // Nueva imagen de fondo
  },
  {
    name: "Elaborada con",
    nameSpan: "Orgullo",
    img: "images/slider-img.png",
    bgImage: "images/slider-bg-03.jpeg", // Nueva imagen de fondo
  },
];

const CarouselCard = ({ item }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail_box">
            <h1>
              {item.name} <br />
              <span>{item.nameSpan}</span>
            </h1>
            {/*<Link to="/read-more">
              <span>Leer más</span>
              <img src="images/white-arrow.png" alt="arrow" />
            </Link>*/}
          </div>
        </div>
        <div className="col-md-4 ms-auto">
          <div className="img-box">
            <img src={item.img} alt={item.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className="carousel-control-prev"
      onClick={onClick}
      type="button"
      aria-label="Previous slide"
    >
      <i className="fa fa-arrow-left" aria-hidden="true"></i>
      <span className="visually-hidden">Previo</span>
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className="carousel-control-next"
      onClick={onClick}
      type="button"
      aria-label="Next slide"
    >
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
      <span className="visually-hidden">Siguiente</span>
    </button>
  );
};

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false, // Cambiado a false para mantener diseño original
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <section
      className="slider_section"
      style={{
        "--bg-image": `url(${items[currentSlide].bgImage})`,
      }}
    >
      <div id="customCarousel1">
        <Slider {...settings}>
          {items.map((item) => (
            <CarouselCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>

      {/* Botones de navegación en su posición original */}
      <div className="carousel_btn-box">
        {/* Los botones se renderizarán aquí automáticamente por Slick */}
      </div>
    </section>
  );
};
