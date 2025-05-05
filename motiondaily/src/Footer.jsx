import { Link } from "react-router";

function Footer() {
  const urls = [
    {
      name: "instagram",
      icon: "null",
      url: "http:/www.instagram.com/motiondailytv",
    },
    {
      name: "facebook",
      icon: "null",
      url: "http:/www.facebook.com/motiondailytv",
    },
    { name: "x", icon: "null", url: "http:/www.x.com/motiondailytv" },
  ];

  return (
    <>
      <section>
        <ul>
          {urls.map((u, i) => (
            <li key={i}>
              <Link to={u.url}>
                <img src={u.icon} alt={u.name} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Footer;
