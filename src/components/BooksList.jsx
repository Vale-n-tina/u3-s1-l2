import SingleBook from "./SingleBook";

const BooksList = function ({ FilmsScifi }) {
  return FilmsScifi.map((libro) => {
    return <SingleBook key={libro.asin} Book={libro} />;
  });
};

export default BooksList;
