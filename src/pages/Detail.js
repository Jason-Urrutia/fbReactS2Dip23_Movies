import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemImage } from "../components/ItemImage"
import { ReviewForm } from "../components/ReviewForm"
import { Reviews } from "../components/Reviews"


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
                    <Col md={5}>
                        <ItemImage source={movieData.cover_image} />
                    </Col>
                    <Col md={7}>
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
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ReviewForm movietitle={movieData.title} movieId={movieData.id}/>
                    </Col>
                </Row>
                <Row>
                <Col>
                <Reviews movieId={movieData.id}/>
                </Col>
                </Row>
            </Container>
        )
    }
    else {
        return null
    }

}