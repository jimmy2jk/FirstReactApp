
export default function Article({image, articleHeader, content}) {
    return (
        <article className="article">
            <img className="article--photo" src={image} />
            <div className="article--text">
                <h2 className="article--header">{articleHeader}</h2>
                <p className="article--content">{content}</p>
            </div>

        </article>
    )
}