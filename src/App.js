import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Numbers from "./components/Numbers";
import Table from "./components/Table";
import HiddenText from "./components/HiddenText";
import Pagination from "./components/Pagination";
import ClickCounter from "./components/ClickCounter";

import diver1 from "./images/diver-1.jpg";
import diver2 from "./images/diver-2.png";
import diver3 from "./images/diver-3.jpg";
import diver4 from "./images/diver-4-1.jpg";

const articles = [
  {
    pic: diver1,
    title: "That horizon is drifring away",
    content:
      "The sky is too blue to even portray it tomorrow A group of people is so stragnant to me that i can't even breath. ",
  },
  {
    pic: diver2,
    title: "How long have i been sinking here?",
    content:
      "Just spit out your sadness and look ahead? I wouldn't be fine that way. Even if i turn everything against me",
  },
  {
    pic: diver3,
    title: "I would still feel a dim light!",
    content:
      "If i could get that far but it's painfull in here. Just by looking in the nights darkness. I feel like a diver struggling with the decompression",
  },
  {
    pic: diver4,
    title: "I want to make sure that I'm alive!",
    content:
      "So as I am for the deep ocean floor again, I'll breath for a moment.",
  },
];

const numbers = [1, 2, 3, 4, 5];

const data = [
  {
    name: "Sasori",
    village: "Hidden Sand",
    power: "Puppet Master",
    killed_by: "The most useless charracter - Sakura (KEKW)",
  },
  {
    name: "Hidan",
    village: "Hidden Rain",
    power: "Jashin curse",
    killed_by: "Shikamaru (ma boi)",
  },
  {
    name: "Kakuzu",
    village: "Hidden Waterfall",
    power: "All freaking elements + 5 hearts",
    killed_by: "RAASSSENGUN!",
  },
  {
    name: "Deidara",
    village: "Hidden Rock",
    power: "Art is an Exploshion!",
    killed_by: "Himself (KEKW)",
  },
  {
    name: "Itachi",
    village: "Hidden Leaf",
    power: "Mangekyou Sharingun, Fire techniques",
    killed_by: "Sasuke (but only by his will)",
  },
  {
    name: "Pain (Nagato)",
    village: "Hidden Rain",
    power: "OF GOD!",
    killed_by: "Naruto therapy",
  },
  {
    name: "Konan",
    village: "Hidden Rain",
    power: "Origami )))",
    killed_by: "Tobi a.k. a.k. Madara a.k. Obito",
  },
  {
    name: "Kisame",
    village: "Hidden Mist",
    power: "Baby sharky tu-ru-ru-ru-ru",
    killed_by: "Himself (seriously, are they with Hidan stepbrothers?)",
  },
  {
    name: "Tobi a.k. Obito",
    village: "Hidden Leaf",
    power: "Interdimensional shifting",
    killed_by:
      "Himself saving Kakashi (COMMON guys! Are you serious?! Stop dying!)",
  },
  {
    name: "Zetsu",
    village: "???",
    power: "Bipolar disorder",
    killed_by: "Naruto",
  },
];

const componentsList = []
  articles.forEach(element => {
    componentsList.push(
      <Article
        image={element.pic}
        articleHeader={element.title}
        content={element.content}
        isReverse={true}
      />
    )
  });

function App() {
  return (
    <div className="App">
      <Header />
      <Article
        image={articles[0].pic}
        articleHeader={articles[0].title}
        content={articles[0].content}
        isReverse={true}
      />
      <Article
        image={articles[1].pic}
        articleHeader={articles[1].title}
        content={articles[1].content}
        isReverse={false}
      />
      <Article
        image={articles[2].pic}
        articleHeader={articles[2].title}
        content={articles[2].content}
        isReverse={true}
      />
      <Article
        image={articles[3].pic}
        articleHeader={articles[3].title}
        content={articles[3].content}
        isReverse={false}
      />
      <Numbers numbers={numbers} />
      <div className="buttons-states">
        <HiddenText />
        <ClickCounter />
      </div>
      <Pagination objects_list={articles}/>
      <Table objects_list={data} />
      <Footer />
    </div>
  );
}

export default App;
