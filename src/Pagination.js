import React from "react";
import "./App.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className="page">
          <a
            onClick={_ => paginate(number)}
            href="!#"
            className={`page-link ${currentPage == number ? "page" : ""}`}
          >
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};
export default Pagination;
