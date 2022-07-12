import React from "react";
import { Button, Card, Container, Row, Col, Image, Badge } from 'react-bootstrap';
import Navigation from "./Navigation";

class SingleMoviePage extends React.Component {

    constructor() {
        super();

        this.state = {
            movie: {}
        }

    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=aacad9b8&t=' + this.props.title)
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
            <div>
                <Navigation changePage={this.props.changePage}></Navigation>
                <Container className="mt-5">
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
                </Container>

            </div>
        );
    }
}

export default SingleMoviePage;
