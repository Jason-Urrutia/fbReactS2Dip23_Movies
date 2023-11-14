import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import { useState, useEffect, useContext } from 'react'
import { ItemImage } from "../components/ItemImage"

export function Home(props) {
  const [movies,setMovies] = useState([])
  
  useEffect(() => {
    console.log( props.items )
    setMovies( props.items )
  }, [props.items])



  const ItemCards = movies.map( ( movie, itemkey ) => {
    const itemLink = `detail/${movie.id}`
    return(
      <Col md={3} className="mb-4" key={itemkey}>
        <Card key={itemkey} className="position-relative">
          <a href={itemLink} className="position-absolute" style={{top:0, left:0, right:0, bottom:0}}>
          </a>
          <ItemImage source={ movie.cover_image} />
          <Card.Body>
            <Card.Title>{ movie.title }</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <Container>
      <Row>
        {ItemCards}
      </Row>
    </Container>
  )
}