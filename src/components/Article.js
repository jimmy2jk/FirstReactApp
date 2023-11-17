export default function Article({ image, articleHeader, content, isReverse = false }) {

  return (
    <article className="article">
      {!isReverse ? 
      <>
        <img className="article--photo" src={image} />
        <div className="article--text">
          <h2 className="article--header">{articleHeader}</h2>
          <p className="article--content">{content}</p>
        </div>
      </> : 
      <>
        <div className="article--text">
          <h2 className="article--header">{articleHeader}</h2>
          <p className="article--content">{content}</p>
        </div>
        <img className="article--photo" src={image} />
      </>
      }
    </article>
  );
}
