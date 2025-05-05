import Nav from "./Nav";
import Hero from "./Hero";
import Promo from "./Promo";
import WhyUs from "./WhyUs";

function Home({promoPacks}) {
  return (
    <>
      <Nav />
      <Hero />
      <Promo promoPacks={promoPacks} />
      <WhyUs/>
    </>
  );
}

export default Home;
