import About from "../components/features/common/About";
import Faq from "../components/features/common/Faq";
import FreeDraw from "../components/features/common/freeDraw/Index";
import Hero from "../components/features/common/Hero";
import Price from "../components/features/common/price/Index";
import Reviews from "../components/features/common/reviews/Index";
import ToBook from "../components/features/common/ToBook";

const Home = () => {
  return (
    <>
      <section id="home" className="h-fit">
        <Hero />
      </section>
      <section id="about" className="h-fit">
        <About />
      </section>
      <section id="price" className="h-fit">
        <Price />
      </section>
      <section id="free-draw" className="h-fit">
        <FreeDraw />
      </section>
      <section id="reviews" className="h-fit">
        <Reviews />
      </section>
      <section id="faq" className="h-fit">
        <Faq />
      </section>
      <section id="faq" className="h-fit">
        <ToBook />
      </section>
    </>
  );
};

export default Home;
