import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import { ref, getDownloadURL } from 'firebase/storage'
import { useState, useEffect, useContext } from 'react'
import { StorageContext } from "../contexts/StorageContext"

export function Home ( props ) {
  const [ books, setBooks ] = useState( [] )

  const Storage = useContext( StorageContext )

  // useEffect( () => {
  //   // if( books.length == 0 ) {
  //    // setBooks( props.items )
  //   // }
  //   console.log( props.items )
  // }, [props.items])

  // card image component
  const ItemImage = ( props ) => {
    const[image,setImage] = useState()

    // useEffect( () => {
     
    // }, [props.name, image ] )
    console.log( props.name )
    if (image) {
    return (
      <Card.Img variant="top" src={image} />
    )
  }
  else {
    return (
      <p>Loading...</p>
    )
  }
}

  
if( !books) {
  return null
}
else {
  // collection
  const Items = books.map(  (item, key) => {
    return (
    <Col md="4" key={key}>
      <Card>
        <Card.Body>
            <ItemImage name={item.cover_image}/>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            By {item.author}
          </Card.Text>
          <Card.Text>{item.cover_image}</Card.Text>
        </Card.Body>
      </Card>
     </Col>
  )
 } )
  return ( 
    <Container>
      <Row>
        {Items}
      </Row>
    </Container>
  )
}
  }