import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class GoogleForm extends Component {
    state = {
        search: ""
    }
handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({search: value});
}
googleSearch = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`).then(records => {
        console.log(records);
    }) 
}
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search Book</Form.Label>
          <Form.Control type="text" placeholder="Enter Book Title" onChange={this.handleInputChange} value={this.state.search}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.googleSearch}>
          Search
        </Button>
      </Form>
    )
  }
}
