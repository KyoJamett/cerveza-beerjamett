export const ProductCard = ({ id, product, handlerOpenModal }) => {
  const mensaje = `Hola, me gustaría comprar la cerveza ${product.name}. ¿Hay stock? Gracias.`;

  const handleProductClick = () => {
    handlerOpenModal(product);
  };

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
          onClick={handleProductClick}
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
          className="btn btn-info rounded-pill py-2 px-4 m-2"
        >
          Ver más <i className="fa fa-cart-plus ms-2"></i>
        </a>
        <a
          href={`https://wa.me/56994882951?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success rounded-pill py-2 px-4 m-2"
        >
          Comprar <i className="fa fa-cart-plus ms-2"></i>
        </a>
      </div>
    </div>
  );
};
