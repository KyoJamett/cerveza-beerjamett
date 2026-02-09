import { useState } from "react";
import { About } from "../components/About";
import { Carousel } from "../components/Carousel";
import { Clients } from "../components/Clients";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Info } from "../components/Info";
import { Navbar } from "../components/Navbar";
import { ProductModal } from "../components/ProductModal";
import { Products } from "../components/Products";

const initialProductSelected = {
  id: 0,
  name: "",
  spanName: "",
  price: 0,
  img: "",
};

export const HomePage = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const [productSelected, setProductSelected] = useState(
    initialProductSelected,
  );

  const handlerProductSelected = (product) => {
    setProductSelected({ ...product });
  };

  const handlerOpenModal = (product) => {
    handlerProductSelected(product);
    setVisibleModal(true);
  };

  const handlerCloseModal = () => {
    setVisibleModal(false);
    setProductSelected(initialProductSelected);
  };

  return (
    <>
      {!visibleModal || (
        <ProductModal
          productSelected={productSelected}
          handlerCloseModal={handlerCloseModal}
          initialProductSelected={initialProductSelected}
        />
      )}
      <div className="main_body_content">
        <div className="hero_area">
          <Carousel />
          <About />
          <Products handlerOpenModal={handlerOpenModal} />
          <Clients />
          <Contact />
          <Info />
          <Footer />
        </div>
      </div>
    </>
  );
};
