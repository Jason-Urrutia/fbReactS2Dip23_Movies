import { useEffect } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useNavigate } from "react-router-dom"


export function Signout( props ) {
    
    const nav = useNavigate()
    
    useEffect(() => {
        props.handler()
        nav("/")
    })

    return(
        <Container>
            <Row>
                <Col>
                {/* Signout */}
                </Col>
                </Row>
        </Container>
    )
}