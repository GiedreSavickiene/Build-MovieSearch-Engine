import React from "react";
import { Form, Row, Col, Container, Button, Image, Badge } from 'react-bootstrap';
import Navigation from "./Navigation";

class Search extends React.Component {

    constructor() {
        super();

        this.state = {
            movie: null
        }

        this.titleInput = React.createRef();
        this.yearInput = React.createRef();

    }

    componentDidMount() {

    }

    searchForMovie = (e) => {
        e.preventDefault();

        let titleInput = this.titleInput.current.value;
        let yearInput = this.yearInput.current.value;

        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=aacad9b8&t=' + titleInput + "&y=" + yearInput)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        movie: result,
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

    render() {
        return (
            <div className="App">
                <Navigation changePage={this.props.changePage}></Navigation>

                <Container>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Label></Form.Label>
                                <Form.Control ref={this.titleInput} placeholder="Title"></Form.Control>
                            </Col>
                            <Col>
                                <Form.Label></Form.Label>
                                <Form.Control ref={this.yearInput} placeholder="Year"></Form.Control>
                            </Col>
                        </Row>
                        <Button type="submit" className="mt-2" onClick={this.searchForMovie}>Search</Button>

                    </Form>

                    {this.state.movie ?
                        <Row>
                            <Col xs={12} md={4}>
                                <Image src={this.state.movie.Poster} alt='N/A'></Image>
                            </Col>
                            <Col xs={12} md={8} lg={7}>
                                <h2>{this.state.movie.Title}</h2>
                                <div>Year: {this.state.movie.Year}</div>
                                <p>{this.state.movie.Genre}</p>
                                <p>Storyline: {this.state.movie.Plot}</p>
                                <p>{this.state.movie.Country}</p>
                                <p>Released: {this.state.movie.Released}</p>
                                <div>{this.state.movie.Language}</div>
                                <span>Runtime: {this.state.movie.Runtime}</span>
                                <div>Rating<Badge> {this.state.movie.imdbRating}</Badge></div>
                            </Col>
                        </Row>
                        :
                        <></>
                    }

                </Container>
            </div>
        )
    }
}

export default Search;
