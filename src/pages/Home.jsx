import About from "../components/features/common/About";
import Faq from "../components/features/common/Faq";
import FreeDraw from "../components/features/common/FreeDraw";
import Hero from "../components/features/common/Hero";
import Price from "../components/features/common/price/Index";

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
      <section id="timeline" className="h-fit">
        <FreeDraw />
      </section>
      <section id="faq" className="h-fit">
        <Faq />
      </section>
    </>
  );
};

export default Home;
