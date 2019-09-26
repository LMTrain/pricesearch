import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Details from "../components/Details";

// var myItems = ["iPhone", "Destruction", "Photography", "mouse", "socks", "belt"]
// var query = ""
// var counter1= 500000
// var counter2= 10000
class Search extends Component {
  state = {
    search: "",
    favMessage:"",
    id: "",      
    books: [],    
    title: "",
    authors: "",
    link: "",
    thumbnail: "",
    description: "",
    publisheddate: "",           
    error: "",
    showBook: [],
    showBookState: false
  };
  
  
  
  searchForBooks = query => {
    API.search(query)
      .then(res => this.setState({ books: res.data.items }))  
      .catch(err => console.log(err));
  }  

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleDetailsSubmit = (id) => {  
    // Find the id in the state
    const book = this.state.books.find((book) => book.id === id);
    // console.log('found Book', book)
    this.setState({showBook: [book], showBookState: true})
        
  }  

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchForBooks(this.state.search);
    console.log(this.state.search);        
  };
  
  favoriteSubmit = (id) => {
    
    const book = this.state.books.find((book) => book.id === id);
    console.log('fav Book', book)
    this.setState({showBook: [book], showBookState: false})
    let bookId = String(book.id)    
    let bookTitle = String(book.volumeInfo.title)    
    let bookAuthors = String(book.volumeInfo.authors)
    let bookLink = String(book.volumeInfo.infoLink)
    let bookThumbnail = String(book.volumeInfo.imageLinks.thumbnail)
    let bookDescription = String(book.volumeInfo.description)
    let bookNote = ""
    let bookDate = String(book.volumeInfo.publishedDate)
    
    

    API.saveBook({

      bookid: bookId,
      title: bookTitle,
      authors: bookAuthors,
      link: bookLink,
      thumbnail: bookThumbnail,
      description: bookDescription,
      note: bookNote,
      publisheddate: bookDate,
    })
      .then(res => {console.log(res)})
      .catch(err => console.log(err));  
    
  };

 
  render() {
    // (function(){
    //   for (var i = 0;  i < myItems.length; i++) {        
    //     console.log(myItems[i])
    //     query = myItems[i]
    //     this.searchForBooks(query)
    //     console.log("THIS IS QUERY", query)
    //     for (var j = counter2; j < counter1; j++) {
    //       counter1 = counter1 -1
    //       console.log("COUNTER! ===", counter1)
    //       counter2 = counter2 -1
    //       console.log("COUNTER2! ===", counter2)
    //     }
    //   }    
    // })();
    

    const {showBookState, showBook} = this.state

    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search For An Item</h1>
          
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}            
          />
          {!showBookState ? <SearchResults books={this.state.books === undefined ? [] : this.state.books}
          favoriteSubmit={this.favoriteSubmit}         
          handleDetailsSubmit={this.handleDetailsSubmit}
          
          
          /> : <Details showBook={showBook}/>}       
         
        </Container>
      </div>
      
    );
  }
}

export default Search;
