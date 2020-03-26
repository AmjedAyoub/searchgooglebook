import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Modal } from "../components/Modal";

class Books extends Component {
  state = {
    books: [],
    search: "",
    show: false
  };

  // componentDidMount() {
  //   this.search(this.state.search);
  // }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  saveBook = req => {
    API.saveBook(req)
      .then(res => this.handleShow())
      .catch(err => console.log(err));
  };

  handleClose = () => {
    this.setState({ show: false })
  };

  handleShow = () => {
    this.setState({ show: true })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  search = q => {
    API.searchBook(q) 
    .then(res => {
      var pic;
      var auth;
      var arr=[];
          for (let i = 0; i < res.data.items.length; i++) {
            if(res.data.items[i].volumeInfo.imageLinks){
              pic=res.data.items[i].volumeInfo.imageLinks.smallThumbnail;
            }
            else{
              pic="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6"
            }
            if(res.data.items[i].volumeInfo.authors){
              auth=res.data.items[i].volumeInfo.authors[0];
            }
            else{
              auth=res.data.items[i].volumeInfo.publisher;
            }
            var obj={
            id: res.data.items[i].volumeInfo.infoLink,
            title: res.data.items[i].volumeInfo.title,
            sub: res.data.items[i].volumeInfo.subtitle,
            des: res.data.items[i].volumeInfo.description,
            url: pic,
            author: auth
          }
          arr.push(obj)
        }
        this.setState({books: arr})
        })
        .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();  
    this.search(this.state.search);
  };

  render() {
    return (
      <Container fluid>
        <Row>
            <Jumbotron>
              <h1>Search Google for Books!</h1>
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search books here!"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Search Book
              </FormBtn>
            </form>
            </Jumbotron>
         
        </Row>
        <Row>
        {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <Row>
                    <Col size="md-8">
                    <a href={book.id}>
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
                    <SaveBtn onClick={() => this.saveBook({title:book.title,sub:book.sub,author:book.author,synopsis:book.des,img:book.url,link:book.id})} />
                    </Col>
                    </Row>
                    <Row>
                    <Col size="md-4">
                    <a href={book.id}>
                      <img src = {book.url}></img>
                      </a>
                      </Col>
                    <Col size="md-8">
                      <p>
                        {book.des}
                      </p>
                      </Col>
                    </Row>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
        <Modal show={this.state.show} handleClose={this.handleClose}>
         
          <strong>
            ************************************
         <br></br>
            ******* Your book has been *******
         <br></br>
            ******* saved successfully *********
         <br></br>
            ************************************
         </strong>
        </Modal>
      </Container>
    );
  }
}

export default Books;


