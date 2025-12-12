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
          <Navbar />
          <hr></hr>
          <Carousel />
          <hr></hr>
          <About />
          <hr></hr>
          <Products />
          <hr></hr>
          <Clients />
          <hr></hr>
          <Contact />
          <hr></hr>
          <Info />
          <hr></hr>
          <Footer />
          <hr></hr>
        </div>
      </div>
    </>
  );
};
