import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router";
import Promo from "./Promo";

function App() {
  const promoPacks = [
    {
      name: "Reposts",
      img: "null",
      deals: [
        { name: "Single Repost", price: "$19.99" },
        { name: "Multi Repost", price: "29.99" },
        { name: "Album Repost", price: "$49.99" },
      ],
      keyFeatures: [
        "Song(s) will be reposted forever",
        "Exposure to 400k followers",
        "Exposure to millions of weekly streams",
      ],
    },
    {
      name: "Uploads",
      img: "null",
      deals: [
        { name: "Single Repost", price: "$19.99" },
        { name: "Multi Repost", price: "29.99" },
        { name: "Album Repost", price: "$49.99" },
      ],
      keyFeatures: [
        "Song(s) will be reposted forever",
        "Exposure to 400k followers",
        "Exposure to millions of weekly streams",
      ],
    },
    {
      name: "Albums",
      img: "null",
      deals: [
        { name: "Single Repost", price: "$19.99" },
        { name: "Multi Repost", price: "29.99" },
        { name: "Album Repost", price: "$49.99" },
      ],
      keyFeatures: [
        "Song(s) will be reposted forever",
        "Exposure to 400k followers",
        "Exposure to millions of weekly streams",
      ],
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home promoPacks={promoPacks} />} />
        <Route path="/promo" element={<Promo promoPacks={promoPacks} />} />
      </Routes>
    </>
  );
}

export default App;
