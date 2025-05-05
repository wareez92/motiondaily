import Nav from "./Nav";
import Hero from "./Hero";
import Promo from "./Promo";

function Home({promoPacks}) {
  return (
    <>
      <Nav />
      <Hero />
      <Promo promoPacks={promoPacks} />
    </>
  );
}

export default Home;
