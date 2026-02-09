import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

const store = [
  {
    id: 1,
    name: "Porter",
    spanName: "Raven",
    price: 3,
    img: "images/cerveza-1.png",
  },
  {
    id: 2,
    name: "Pilsen Lager",
    spanName: "Raven",
    price: 3,
    img: "images/cerveza-2.png",
  },
  {
    id: 3,
    name: "Scottish Ale",
    spanName: "Raven",
    price: 3,
    img: "images/cerveza-3.png",
  },
  {
    id: 4,
    name: "English Pale Ale",
    spanName: "Raven",
    price: 3,
    img: "images/cerveza-4.png",
  },
];

export const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section id="products" className="chocolate_section ">
        <div className="container">
          <div className="heading_container pt-4">
            <h2>Nuestras variedades</h2>
            <p>
              Desde refrescantes lagers hasta robustas porters, nuestras
              variedades ofrecen una experiencia para cada paladar. Escoge tu
              favorita!
            </p>
          </div>
        </div>
        <div className="container">
          <div className="chocolate_container">
            <Slider {...settings}>
              {store.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
