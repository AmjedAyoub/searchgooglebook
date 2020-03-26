import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List2";
import { DelBtn } from "../components/DelBtn";
import API from "../utils/API";
import { Modal } from "../components/Modal";

class Detail extends Component {
  state = {
    books: [],
    note: "",
    show: false,
    bookId: "",
    notes: []
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) => {
        this.setState({ books: res.data, title: "", author: "", synopsis: "", img: "", link: "" })
      })

      .catch(err => console.log(err));
  };

  loadNotes = (id) => {
    API.getBook(id)
      .then(res => {
        this.setState({ bookId:id })
        this.setState({ notes: res.data.notes })
        this.handleShow();
      })
      .catch(err => console.log(err));
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  saveNote = (id, req) => {
    API.saveNote(id, req)
      .then(res => { 
        this.setState({ note:"" })
        this.handleClose();
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClose = () => {
    this.setState({ show: false })
  };

  handleShow = () => {
    this.setState({ show: true })
  };

  render() {

    return (
      <Container fluid>
        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <Row>
                  <Col size="md-8">
                    <a href={book.link}>
                      <strong>
                        {book.title}
                      </strong>
                      <p>
                        {book.sub}
                      </p>
                      <p>
                        By: {book.author}
                      </p>
                    </a></Col>
                  <Col size="md-4">
                    <DelBtn onClick={() => this.deleteBook(book._id)}/>
                    <FormBtn variant="primary" onClick={() => this.loadNotes(book._id)}>
                      View notes
                    </FormBtn>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-4">
                    <a href={book.link}>
                      <img src={book.img}></img>
                    </a>
                  </Col>
                  <Col size="md-8">
                    <p>
                      {book.synopsis}
                    </p>
                  </Col>
                </Row>
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
        <div>

          <Modal show={this.state.show} handleClose={this.handleClose}>
<Row>
  
<Col size="md-12">
            <strong>
              Notes:
      </strong>
      </Col>
      </Row>
      {this.state.notes.length ? (
        <Row>
          <Col size="md-12">
          <List>
            {this.state.notes.map(note => (
              <ListItem key={note._id}>
                      <p>
                        {note.body}
                      </p>
                    <DeleteBtn onClick={() => this.saveNote(this.state.bookId, { noteID: note._id,todo:"delete"})} />
              </ListItem>
            ))}
          </List>
          </Col>
          </Row>
        ) : (
            <h3>No Notes to Display</h3>
          )}
          <Row>
          <Col size="md-12">
            <Input
              value={this.state.note}
              onChange={this.handleInputChange}
              name="note"
              placeholder="Add new note here...."
            />
            <FormBtn
              onClick={() => this.saveNote(this.state.bookId, { body: this.state.note,todo:"save" })}
            >
              Add note
            </FormBtn>
            </Col>
            </Row>
          </Modal>
        </div>
      </Container>
    );
  }
}

export default Detail;
