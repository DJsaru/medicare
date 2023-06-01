import MultipleItems from "./Carousel";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/footer";

export default function Home() {
  return (
    <div className="home-hero">
      <span className="hero-one-one">
        <h3> Welcome To Health Care</h3>
      </span>
      <span>
        <span className="hero-two"> M </span>
        <span className="hero-two-one"> edical </span>
        <span className="hero-two-thr"> & </span>
      </span>

      <div>
        <span className="hero-t-one">H</span>
        <span className="hero-t-two">ealth</span>
        <span className="hero-t-thr">C</span>
        <span className="hero-t-for">are</span>
      </div>
      <div>
        <span className="hero-th-o">S</span>
        <span className="hero-th-t">olution</span>
      </div>
      <div>
        <h1 className="scroll-head"> What We Provide </h1>
      </div>

      <div></div>
      <div>
        <MultipleItems />
      </div>
      <div className="home-foot">
        <Footer />
      </div>
    </div>
  );
}
