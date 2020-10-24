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
        <div>
        {savedBooks.map((book, index ) => <SavedCard key={index} {...book} />)}
        </div>
      </Container>
    </div>
  );
}

export default Saved;
