import React , { useEffect , useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import ShowDetails from './ShowDetails';


const Show = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://api.tvmaze.com/search/shows?q=all`)
            .then((response) => {
                //console.log(response.data);
                setAPIData(response.data);
                localStorage.setItem("APIres",JSON.stringify(response.data))
            })
    }, [])
    const changeState = (id) => {  
        // alert(id)
        localStorage.setItem("showId",id);
    }; 
  return (
    <div>
        <Container>
            <Row>
                {APIData.map((data) => {
                return(
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.show.image.original} />
                    <Card.Body>
                    <Card.Title>{data.show.name}</Card.Title>
                    <Card.Text>Language: {data.show.language}</Card.Text>
                    <Card.Text>Rating: {data.show.rating.average}</Card.Text>
                    <Link to='/showdetails'>
                    <Button variant="primary" onClick={() => changeState(data.show.id)}>Details</Button>
                    </Link>
                    </Card.Body>
                    </Card><br/>
                    </Col>
                )
                })}
            </Row>
        </Container>       
    </div>
  )
}

export default Show