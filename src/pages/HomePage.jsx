import { About } from "../components/About";
import { Carousel } from "../components/Carousel";
import { Clients } from "../components/Clients";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Info } from "../components/Info";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";

export const HomePage = () => {
  return (
    <>
      <div className="main_body_content">
        <div className="hero_area">
          <Carousel />
          <About />
          <Products />
          <Clients />
          <Contact />
          <Info />
          <Footer />
        </div>
      </div>
    </>
  );
};
