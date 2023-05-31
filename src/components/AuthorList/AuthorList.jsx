
import React from 'react';
import { useGlobalContext } from '../../context.';
import Author from "../AuthorList/Author";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./AuthorList.css";

const BookList = () => {
  const { authors, loading, resultTitle } = useGlobalContext();
  const authorsWithImages = authors.map((singleAuthor) => {
    return {
      ...singleAuthor,
      imgUrl: singleAuthor.imgUrl || coverImg,
    };
  });

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {authorsWithImages.map((author, index) => (
            <Author key={index} {...author} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
