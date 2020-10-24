import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container"
import Card from "../components/Card"
import API from "../utils/API";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [result, setResult] = useState({});

  useEffect(() => {
    loadBooks("");
  }, []);

  function loadBooks(search) {
    API.getGoogle(search)
      .then((response) => {
        setBooks(response.data.items);
      }).catch(err => console.log(err));
  }

  const handleSubmit = function (e) {
    e.preventDefault();
    loadBooks(result);
    setResult("");
  }


  return (
    <div className="search">
      <Navbar />
      <Container>
        <Jumbotron />
      </Container>
      <Container>
        <form className="col-lg-8" onSubmit={handleSubmit}>
          <input className="form-control form-control-lg" type="search" placeholder="Enter Book Title" onChange={(e) => setResult(e.target.value)} />
        </form>
      </Container>
      <br />
      <Container>
        {books.map(book => {
          return (
            <Card data={book.volumeInfo} key={book.id} />
          )
        })}
      </Container>
    </div>
  );
}

export default Search;
