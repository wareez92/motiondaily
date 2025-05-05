function Promo({ promoPacks }) {
  console.log(promoPacks);

  return (
    <>
      {promoPacks.map((p, i) => (
        <div key={i}>
          <img src={p.img} alt={p.name} />
          <h6>{p.name}</h6>
          <ul >
            {p.deals.map((m, i) => (
              <li key={i}>{m.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Promo;
