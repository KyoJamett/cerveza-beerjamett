import Slider from "react-slick";

const clients = [
  {
    name: "Gero Miliya",
    desc: "long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has",
    img: "images/client-img.jpg",
  },
  {
    name: "Gero Miliya",
    desc: "long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has",
    img: "images/client-img.jpg",
  },
  {
    name: "Gero Miliya",
    desc: "long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it haslong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has",
    img: "images/client-img.jpg",
  },
];

const ClientCard = ({ client }) => {
  return (
    <div className="box">
      <div className="img-box">
        <img src={client.img} alt={client.name} className="img-fluid" />
      </div>
      <div className="detail-box">
        <h4>{client.name}</h4>
        <p>{client.desc}</p>
        <i className="fa fa-quote-left" aria-hidden="true"></i>
      </div>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="carousel-control-prev" onClick={onClick}>
      <i className="fa fa-arrow-left" aria-hidden="true"></i>
      <span className="visually-hidden">Previous</span>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="carousel-control-next" onClick={onClick}>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
      <span className="visually-hidden">Next</span>
    </button>
  );
};

export const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <>
      <section className="client_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <div className="img-box sub_img-box">
                <img
                  src="images/client-chocolate.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 px-0">
              <div className="client_container">
                <div className="heading_container">
                  <h2>Ellos ya la probaron</h2>
                </div>
                <Slider {...settings}>
                  {clients.map((client) => {
                    return <ClientCard key={client.key} client={client} />;
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
