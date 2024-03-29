import { useState } from "react";
import Article from "./Article";

export default function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination">
      <article>
        <Article
          image={props.objects_list[currentPage - 1].pic}
          articleHeader={props.objects_list[currentPage - 1].title}
          content={props.objects_list[currentPage - 1].content}
          isReverse={false}
        />
      </article>
      <div className="pagination--buttons">
        {Array.from(
          { length: Math.ceil(props.objects_list.length) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => changePage(index + 1)}
              className={
                index + 1 === currentPage ? "pag-button-on" : "pag-button-off"
              }
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
