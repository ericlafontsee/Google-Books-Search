import React, { useState } from "react";
import API from "../utils/API";
import { Col, Row, Button, Card, Container, Form } from "react-bootstrap";

function Search() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setBook(event.target.value);
    console.log(book);
  }

  function loadBooks(book) {
    API.getGoogle(book)
      .then((res) => setBook(res.data.items))
      .catch((err) => console.log(err));
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.getGoogle(book).then((res) => {
      console.log(res);
      setResult(res.data.items);
    });
  }

  return (
    <>
      <Container className="mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="mt-5">
              <h1>Google Book Search</h1>
            </Form.Label>
            <input type="text" onChange={handleChange} className="form-control mt-10" id="book" placeholder="Search for Books"></input>
            <button type="submit" className="btn btn-danger">Search</button>
          </Form.Group>
        </Form>
      </Container>
      <Container>
        <Row>
          {result.map((book) => (
            <Col lg={6}>
              <Card
                className="mb-3"
                bg="dark"
                text="light"
                style={{ width: "30rem" }}
                style={{ height: "40rem" }}
              >
                <Card.Img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.title}
                  height="300px"
                />
                <Card.Body>
                  <Card.Title>{book.volumeInfo.title}</Card.Title>
                  <Card.Text>Authors: {book.volumeInfo.authors}</Card.Text>
                  <Button
                    onClick={(e) => {
                      window.location.href = book.volumeInfo.previewLink;
                    }}
                    variant="primary"
                  >
                    View
                  </Button>
                  <Card.Text>{book.volumeInfo.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Search;
