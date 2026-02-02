import Slider from "react-slick";
import { Link } from "react-router-dom";

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

const ProductCard = ({ product }) => {
  const mensaje = `Hola, me gustaría comprar la cerveza ${product.name}. ¿Hay stock? Gracias.`;

  return (
    <div className="box">
      <div className="img-box">
        <img
          src={product.img}
          alt={`${product.name} ${product.type}`}
          className="img-fluid"
        />
      </div>
      <div className="detail-box">
        <h6>
          {product.name} <span>{product.type}</span>
        </h6>
        <h5>${product.price.toFixed(3)}</h5>
        <a
          href={`https://wa.me/56994882951?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary rounded-pill py-2 px-4 m-2"
        >
          Comprar <i className="fa fa-cart-plus ms-2"></i>
        </a>
      </div>
    </div>
  );
};

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
      <section className="chocolate_section ">
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
