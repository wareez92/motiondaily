import Nav from "./Nav";
import Hero from "./Hero";
import Promo from "./Promo";
import WhyUs from "./WhyUs";
import About from "./About";
import Contact from "./Contact";

function Home({ promoPacks }) {
  return (
    <>
      <Nav />
      <hr/>
      <Hero />
      <hr/>
      <Promo promoPacks={promoPacks} />
      <hr/>
      <WhyUs />
      <hr/>
      <About />
      <hr/>
      <Contact/>
      <hr/>
    </>
  );
}

export default Home;
