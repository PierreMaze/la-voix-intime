// import Contact from "../features/common/Contact";
import About from "../components/features/common/About";
import Hero from "../components/features/common/Hero";
import Price from "../features/common/price/Index";
// import Projects from "../features/projects/index.jsx";

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
      {/*<section id="timeline" className="h-fit">
        <Timeline />
      </section>
      <section id="contact" className="h-fit">
        <Contact />
      </section> */}
    </>
  );
};

export default Home;
