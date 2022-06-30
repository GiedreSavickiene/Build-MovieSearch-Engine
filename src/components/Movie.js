import React from "react";
import { Button, Card } from 'react-bootstrap';

class Movie extends React.Component {

    constructor() {
        super();

    }

    componentDidMount() {
        ;

    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.details.Poster} />
                <Card.Body>
                    <Card.Title>{this.props.details.Title}</Card.Title>
                    <Card.Text>
                        {this.props.details.Year}
                    </Card.Text>
                    <Button variant="primary">Check out</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Movie;
