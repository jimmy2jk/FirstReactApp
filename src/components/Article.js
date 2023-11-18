export default function Article(props) {

  return (
    <article className="article">
      {!props.isReverse ? 
      <>
        <img className="article--photo" src={props.image} />
        <div className="article--text">
          <h2 className="article--header">{props.articleHeader}</h2>
          <p className="article--content">{props.content}</p>
        </div>
      </> : 
      <>
        <div className="article--text">
          <h2 className="article--header">{props.articleHeader}</h2>
          <p className="article--content">{props.content}</p>
        </div>
        <img className="article--photo" src={props.image} />
      </>
      }
    </article>
  );
}
