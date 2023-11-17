import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Numbers from "./components/Numbers";
import Table from "./components/Table";
import HiddenText from "./components/HiddenText";
import PaginationExample from "./components/PaginationExample";

import diver1 from "./images/diver-1.jpg";
import diver2 from "./images/diver-2.png";
import diver3 from "./images/diver-3.jpg";
import diver4 from "./images/diver-4-1.jpg";

function App() {
  const articles = [
    {
      pic: diver1,
      title: "That horizon is drifring away",
      content: "The sky is too blue to even portray it tomorrow A group of people is so stragnant to me that i can't even breath. "
    },
    {
      pic: diver2,
      title: "How long have i been sinking here?",
      content: "Just spit out your sadness and look ahead? I wouldn't be fine that way. Even if i turn everything against me"
    },
    {
      pic: diver3,
      title: "I would still feel a dim light!",
      content:"If i could get that far but it's painfull in here. Just by looking in the nights darkness. I feel like a diver struggling with the decompression"
    },
    {
      pic: diver4,
      title: "I want to make sure that I'm alive!",
      content:"So as I am for the deep ocean floor again, I'll breath for a moment."
    },
  ];

  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 22 },
  ];

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
      
      <Numbers />
      <Table objects_list={data} />
      <HiddenText />
      <PaginationExample />
      <Footer />
    </div>
  );
}

export default App;
