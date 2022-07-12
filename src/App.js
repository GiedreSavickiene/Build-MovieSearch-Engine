import logo from './logo.svg';
import './App.css';
import React from 'react'
import Movie from './components/Movie';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import SingleMoviePage from './components/SingleMoviePage';
import Search from './components/Search';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      title: 'batman',
      movies: [],
      isLoaded: false,
      error: null,
      pageName: ''
    }
  }


  componentDidMount() {
    this.searchForMovie();
  }


  searchForMovie = () => {

    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=aacad9b8&s=' + this.state.title + '&page=2')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            movies: result.Search,
            isLoaded: true
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          })
        }
      )

  }

  getMovie = (movie, index) => {

    return (
      <Col key={index}>
        <Movie details={movie} changePage={this.changePage}></Movie>
      </Col>
    )

  }

  changePage = (pageName, title = 'batman', search = false) => {

    this.setState({
      pageName: pageName,
      title: title
    }, () =>
      search ? this.searchForMovie() : null
    )

  }

  render() {

    if (this.state.pageName === 'singleMoviePage') {
      return (
        <SingleMoviePage changePage={this.changePage} title={this.state.title}></SingleMoviePage>
      )

    } else if (this.state.pageName === 'search') {

      return (
        <Search changePage={this.changePage}  ></Search>
      )


    } else {


      const { error, isLoaded, movies } = this.state;

      if (error) {

        return (
          <Container>
            <div>Error: {error.message}</div>
          </Container>
        )

      } else if (!isLoaded) {
        return (
          <Container>
            <div>Loadig...</div>
          </Container>
        )
      } else {
        return (
          <div className="App" >
            <Navigation changePage={this.changePage}></Navigation>
            <header className="App-header">

              <Container className='mt-3'>
                <Row>
                  {this.state.movies.map(this.getMovie)}
                </Row>
              </Container>


            </header>
          </div>
        );
      }
    }
  }
}

export default App;
