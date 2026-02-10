import Slider from "react-slick";
import { ProductCard } from "./ProductCard";

const store = [
  {
    abv: "6.5",
    desc: "Cerveza negra de gran cuerpo, con marcadas notas a chocolate. Excelente para acompañar con carnes ahumadas y postres de bizcocho.",
    id: 1,
    img: "images/cerveza-1.png",
    imgModal: "images/cerveza-1-modal.jpg",
    name: "Porter",
    price: 3,
    spanName: "Raven",
    style: "Negra",
    vol: "500",
  },
  {
    abv: "4.6",
    desc: "Cerveza rubia ligera y luminosa, notable amargor y aromas cítricos gracias a sus lúpulos. Perfecta para probar con carnes blancas, quesos y postres de fruta.",
    id: 2,
    img: "images/cerveza-2.png",
    imgModal: "images/cerveza-2-modal.jpg",
    name: "Pilsen Lager",
    price: 3,
    spanName: "Raven",
    style: "Rubia",
    vol: "500",
  },
  {
    abv: "6",
    desc: "Exquisita cerveza roja, hecha de maltas caramelizadas que dan ese característico sabor a toffee con aroma a nuez que solo nosotros sabemos hacer.",
    id: 3,
    img: "images/cerveza-3.png",
    imgModal: "images/cerveza-3-modal.jpg",
    name: "Scottish Ale",
    price: 3,
    spanName: "Raven",
    style: "Ámbar",
    vol: "500",
  },
  {
    abv: "5",
    desc: "Cerveza Rubia Ale de gran cuerpo y leve dulzor, suave amargor de los lúpulos y notable aroma floral acompañada de un cremosa espuma. Ideal acompañamiento para pastas y postres de frutas.",
    id: 4,
    img: "images/cerveza-4.png",
    imgModal: "images/cerveza-4-modal.jpg",
    name: "English Pale Ale",
    price: 3,
    spanName: "Raven",
    style: "Rubia",
    vol: "500",
  },
  {
    abv: "4.5",
    desc: "Cerveza rubia Ale hecha con ajíes fresco de huerta + añejados, dan como resultado esta original y única variedad de un fresco lupulado con un notable picor, ideal para quienes buscan algo extremo!",
    id: 4,
    img: "images/cerveza-5.png",
    imgModal: "images/cerveza-5-modal.jpeg",
    name: "Infernale",
    price: 3,
    spanName: "Raven",
    style: "Rubia",
    vol: "500",
  },
];

export const Products = ({ handlerOpenModal }) => {
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
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    handlerOpenModal={handlerOpenModal}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
