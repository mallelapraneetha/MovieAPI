import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShowDetails = () => {
    const Id = localStorage.getItem("showId");
    const APIRes = localStorage.getItem("APIres");
    const APIResult = JSON.parse(APIRes);
    console.log(Id);
    console.log(JSON.parse(APIRes));
    const ShowDetails = APIResult.filter((data) => {
        if(data.show.id === parseInt(Id)){
            return data.show;
        }
    })
  return (
    
    <Container>
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ShowDetails[0].show.image.original} />
                <Card.Body>
                    <Card.Title>{ShowDetails[0].show.name}</Card.Title>
                    <Card.Text>Language: {ShowDetails[0].show.language}</Card.Text>
                    <Card.Text>Rating: {ShowDetails[0].show.rating.average}</Card.Text>
                    <Card.Text>Summary: {ShowDetails[0].show.summary}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default ShowDetails