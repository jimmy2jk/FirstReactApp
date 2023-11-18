function defaultLayout(props) {
  return (
    <>
      <div className="article--text">
        <h2 className="article--header">{props.articleHeader}</h2>
        <p className="article--content">{props.content}</p>
      </div>
      <img className="article--photo" src={props.image} />
    </>
  );
}

function reverseLayout(props) {
  return (
    <>
      <img className="article--photo" src={props.image} />
      <div className="article--text">
        <h2 className="article--header">{props.articleHeader}</h2>
        <p className="article--content">{props.content}</p>
      </div>
    </>
  );
}

export default function Article(props) {
  return (
    <article className="article">
      {!props.isReverse ? reverseLayout(props) : defaultLayout(props)}
    </article>
  );
}
