import logo from "./logo.svg";
import "./App.css";
import "./product.css";
import Header from "./Header";
import Main from "./main_content";
import Group2 from "./Group2";
import Header2 from "./Header2";

function App() {
  const informations = [
    {
      avatar: "images/background.png",
      bitmap: "Tourism",
      desc: "One of Saturn's largest rings may be newer than anyone",
      date: "June 6, 2019    By Rickie Baroch",
    },
    {
      avatar: "images/background.png",
      bitmap: "Tourism",
      desc: "One of Saturn's largest rings may be newer than anyone",
      date: "June 6, 2019    By Rickie Baroch",
    },
    {
      avatar: "images/background.png",
      bitmap: "Tourism",
      desc: "One of Saturn's largest rings may be newer than anyone",
      date: "June 6, 2019    By Rickie Baroch",
    },
    {
      avatar: "images/background.png",
      bitmap: "Tourism",
      desc: "One of Saturn's largest rings may be newer than anyone",
      date: "June 6, 2019    By Rickie Baroch",
    },
    {
      avatar: "images/background.png",
      bitmap: "Tourism",
      desc: "One of Saturn's largest rings may be newer than anyone",
      date: "June 6, 2019    By Rickie Baroch",
    },
    {
      avatar: "images/background.png",
      bitmap: "Tourism",
      desc: "One of Saturn's largest rings may be newer than anyone",
      date: "June 6, 2019    By Rickie Baroch",
    },
  ];

  const informations2 = [
    {
      imgUrl: "",
      name: "Kate",
      description: "Food cooking blogger",
      intro:
        "Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…",
      text: "Continue Reading",
    },
    {
      imgUrl: "",
      name: "Kate",
      description: "Food cooking blogger",
      intro:
        "Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…",
      text: "Continue Reading",
    },
    {
      imgUrl: "",
      name: "Kate",
      description: "Food cooking blogger",
      intro:
        "Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…",
      text: "Continue Reading",
    },
    {
      imgUrl: "",
      name: "Kate",
      description: "Food cooking blogger",
      intro:
        "Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…",
      text: "Continue Reading",
    },
  ];

  const mainContent = informations.map((information, index) => {
    return <Main data={information} />;
  });
  const mainContent2 = informations2.map((information, index) => {
    return <Group2 data={information} />;
  });
  return (
    <div>
      <Header />
      <div className="background-content">
        <img src="background.jpg" alt=""></img>
        <div className="vehicle">
          <h3>Vehicle</h3>
          <h2>One of Saturn's largest rings may be newer than anyone</h2>
        </div>
      </div>
      <div className="input-content">
        <input
          type="text"
          placeholder="Search"
          className="search-content"
        ></input>
      </div>
      <div className="content-wrap">
        <div className="group1">{mainContent}</div>
        <div className="group2">{mainContent2}</div>
      </div>
      <div className="center">
        <p>Follow our @instagram_name</p>
      </div>
      <ul className="images-ava">
        <li>
          <img src="images/background.png" alt=""></img>
        </li>
        <li>
          <img src="images/background.png" alt=""></img>
        </li>
        <li>
          <img src="images/background.png" alt=""></img>
        </li>
        <li>
          <img src="images/background.png" alt=""></img>
        </li>
        <li>
          <img src="images/background.png" alt=""></img>
        </li>
      </ul>

      <Header2 />
      <div className="center">
        <p>@2019 Logwork. All Right Reserved.</p>
      </div>
    </div>
  );
}

export default App;
