import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

import mustangPic from "./images/RoyMustang.jpg";

function App() {
    const articles = [
        {
            pic: mustangPic,
            title: "Roy Mustang",
            content:
                "Roy is a clean-shaven young man with dark eyes. Roy's dark hair - perhaps in keeping with his persona - is worn casually unkempt, falling over his eyes; in more formal or somber situations, however, he is known to wear it neatly slicked back.",
        },
        {
            pic: mustangPic,
            title: "Roy Mustang",
            content:
                "Roy is a clean-shaven young man with dark eyes. Roy's dark hair - perhaps in keeping with his persona - is worn casually unkempt, falling over his eyes; in more formal or somber situations, however, he is known to wear it neatly slicked back.",
        },
        {
            pic: mustangPic,
            title: "Roy Mustang",
            content:
                "Roy is a clean-shaven young man with dark eyes. Roy's dark hair - perhaps in keeping with his persona - is worn casually unkempt, falling over his eyes; in more formal or somber situations, however, he is known to wear it neatly slicked back.",
        },
    ];

    return (
        <div className="App">
            <Header />
            <Article
                image={articles[0].pic}
                articleHeader={articles[0].title}
                content={articles[0].content}
            />
            <Article
                image={articles[1].pic}
                articleHeader={articles[1].title}
                content={articles[1].content}
            />
            <Article
                image={articles[2].pic}
                articleHeader={articles[2].title}
                content={articles[2].content}
            />
            <Footer />
        </div>
    );
}

export default App;
