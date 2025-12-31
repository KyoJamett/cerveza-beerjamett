import Slider from "react-slick";
import { Link } from "react-router-dom";

const store = [
  {
    name: "Yummy",
    spanName: "Raven",
    price: 5.0,
    img: "images/cerveza-1.png",
  },
  {
    name: "Yummy",
    spanName: "Raven",
    price: 5.0,
    img: "images/cerveza-2.png",
  },
  {
    name: "Yummy",
    spanName: "Raven",
    price: 5.0,
    img: "images/cerveza-3.png",
  },
  {
    name: "Yummy",
    spanName: "Raven",
    price: 5.0,
    img: "images/cerveza-4.png",
  },
  {
    name: "Yummy",
    spanName: "Raven",
    price: 5.0,
    img: "images/chocolate2.png",
  },
  {
    name: "Yummy",
    spanName: "Raven",
    price: 5.0,
    img: "images/chocolate3.png",
  },
];

const ProductCard = ({ product }) => {
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
        <h5>${product.price.toFixed(2)}</h5>
        <Link to={`/product/${product.id}`}>BUY NOW</Link>
      </div>
    </div>
  );
};

export const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
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
            {/*<div className="box">
              <div className="img-box">
                <img src="images/chocolate1.png" alt="" className="img-fluid" />
              </div>
              <div className="detail-box">
                <h6>
                  Yummy <span>chocolate</span>
                </h6>
                <h5>$5.0</h5>
                <a href="">BUY NOW</a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/chocolate2.png" alt="" className="img-fluid" />
              </div>
              <div className="detail-box">
                <h6>
                  Yummy <span>chocolate</span>
                </h6>
                <h5>$5.0</h5>
                <a href="">BUY NOW</a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/chocolate3.png" alt="" className="img-fluid" />
              </div>
              <div className="detail-box">
                <h6>
                  Yummy <span>chocolate</span>
                </h6>
                <h5>$5.0</h5>
                <a href="">BUY NOW</a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/chocolate1.png" alt="" className="img-fluid" />
              </div>
              <div className="detail-box">
                <h6>
                  Yummy <span>chocolate</span>
                </h6>
                <h5>$5.0</h5>
                <a href="">BUY NOW</a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/chocolate2.png" alt="" className="img-fluid" />
              </div>
              <div className="detail-box">
                <h6>
                  Yummy <span>chocolate</span>
                </h6>
                <h5>$5.0</h5>
                <a href="">BUY NOW</a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/chocolate3.png" alt="" className="img-fluid" />
              </div>
              <div className="detail-box">
                <h6>
                  Yummy <span>chocolate</span>
                </h6>
                <h5>$5.0</h5>
                <a href="">BUY NOW</a>
              </div>
            </div>*/}
            <Slider {...settings}>
              {store.map((product) => {
                return <ProductCard key={product.key} product={product} />;
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
