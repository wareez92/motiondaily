function Promo({ promoPacks }) {
  console.log(promoPacks);

  return (
    <>
      <section>
        <h1>Promo</h1>
        {promoPacks.map((p, i) => (
          <div key={i}>
            <img src={p.img} alt={p.name} />
            <h6>{p.name}</h6>
            <ul>
              {p.deals.map((m, i) => (
                <li key={i}>{m.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}

export default Promo;
