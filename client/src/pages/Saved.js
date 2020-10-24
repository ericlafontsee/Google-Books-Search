import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import SavedCard from "../components/Savedcard";
import API from "../utils/API";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    API.getBooks()
      .then((res) => {
        setSavedBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="saved">
      <Navbar />
      <Container>
        <Jumbotron />
        {savedBooks.map((book) => {
          return <SavedCard data={book} key={book._id} />;
        })}
      </Container>
    </div>
  );
}

export default Saved;
