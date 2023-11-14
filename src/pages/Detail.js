import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemImage } from "../components/ItemImage"
import Button from "react-bootstrap/Button"

export function Detail(props) {
    const [movieData, setMovieData] = useState()

    let { id } = useParams()

    useEffect(() => {
        if (!movieData) {
            props.handler(id).then((movie) => setMovieData(movie))
        }
    }, [id])

    if (movieData) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>{movieData.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ItemImage source={movieData.cover_image} />
                    </Col>
                    <Col md={6}>
                        <h2>More Information</h2>
                        <h3>Storyline</h3>
                        <p>{movieData.storyline}</p>
                        <h3>Main Actors</h3>
                        <p>{movieData.main_actors}</p>
                        <h3>Director</h3>
                        <p>{movieData.director}</p>
                        <h3>Producer</h3>
                        <p>{movieData.producer}</p>
                        <h3>Genre</h3>
                        <p>{movieData.category}</p>
                        <h3>Year</h3>
                        <p>{movieData.year}</p>
                        <h3>Runtime</h3>
                        <p>{movieData.runtime}</p>
                        <h3>IMDB Link</h3>
                        <p>{movieData.imdb_link}</p>
                        <Form>
                            <h3>Review this movie</h3>
                            <Form.Group>
                                <Form.Label>Star Rating</Form.Label>
                                <Form.Select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Review Title</Form.Label>
                                <Form.Control type="text" placeholder="I love this movie" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Review</Form.Label>
                                <Form.Control as="textarea" rows={4} cols={30} placeholder="I could not stop watching!" />
                            </Form.Group>
                            <Button type="submit" variant="primary">Submit</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
    else {
        return null
    }

}