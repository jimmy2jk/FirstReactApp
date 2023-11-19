import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Numbers from "./components/Numbers";
import Table from "./components/Table";
import HiddenText from "./components/HiddenText";
import Pagination from "./components/Pagination";
import ClickCounter from "./components/ClickCounter";
import logo from "./images/logo192.png";
import diver1 from "./images/diver-1.jpg";
import diver2 from "./images/diver-2.png";
import diver3 from "./images/diver-3.jpg";
import diver4 from "./images/diver-4-1.jpg";
import sasori from "./images/sasori.jpg";
import hidan from "./images/hidan.jpg";
import kakuzu from "./images/kakuzu.jpg";
import deidara from "./images/deidara.jpg";
import itachi from "./images/itachi.jpg";
import nagato from "./images/nagato.jpg";
import konan from "./images/konan.jpg";
import kisame from "./images/kisame.jpg";
import tobi from "./images/tobi.jpg";
import zetsu from "./images/zetsu.jpg";

const articles = [
  {
    pic: diver1,
    title: "That horizon is drifring away",
    content:
      "The sky is too blue to even portray it tomorrow. A group of people is so stragnant to me that i can't even breath. ",
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

const tableData = [
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

const akatsuki = [
  {
    pic: itachi,
    title: "Itachi",
    content: "A highly skilled Uchiha prodigy, Itachi possesses the Sharingan and is known for his exceptional skills in genjutsu, taijutsu, and ninjutsu.",
  },
  {
    pic: hidan,
    title: "Hidan",
    content: "Immortal due to a ritual involving his own blood, Hidan is a sadistic and unpredictable fighter who worships the god Jashin.",
  },
  {
    pic: kakuzu,
    title: "Kakuzu",
    content: "Driven by greed, Kakuzu is a money-oriented ninja who can sew his body parts back together and use threads to extract hearts for immortality.",
  },
  {
    pic: deidara,
    title: "Deidara",
    content: "An explosives expert, Deidara uses clay to create explosive art through his unique Explosive Release techniques.",
  },
  {
    pic: sasori,
    title: "Sasori",
    content: "A master puppeteer, Sasori converts human bodies into puppets and controls them using intricate puppetry techniques.",
  },
  {
    pic: nagato,
    title: "Pain / Nagato",
    content: "The leader of Akatsuki, Pain possesses the Rinnegan and can control six bodies simultaneously, each with unique abilities.",
  },
  {
    pic: konan,
    title: "Konan",
    content: "A skilled Paper Jutsu user, Konan has the ability to manipulate paper for various offensive and defensive purposes.",
  },
  {
    pic: kisame,
    title: "Kisame",
    content: "Partnered with Itachi, Kisame is a powerful water-based ninja with immense physical strength and wields the sword Samehada.",
  },
  {
    pic: tobi,
    title: "Tobi",
    content: "Initially posing as a bumbling fool, Tobi is later revealed as Obito Uchiha, a former comrade of Kakashi and Itachi with significant ties to the Uchiha clan.",
  },
  {
    pic: zetsu,
    title: "Zetsu",
    content: "A plant-based entity with a split personality, Zetsu serves as Akatsuki's spy and possesses abilities related to plants and camouflage.",
  },
];

function App() {
  return (
    <div className="App">
      <Header logo={logo} title="Made with Love, Obsession and React" />
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
      <Pagination objects_list={akatsuki} />
      <Table objects_list={tableData} />
      <Footer />
    </div>
  );
}

export default App;
