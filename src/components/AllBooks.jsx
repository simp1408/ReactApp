import { Component } from "react";
import { Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FantasyBooks from "../data/fantasy.json";
import ScifiBook from "../data/scifi.json";
import HistoryBook from "../data/history.json";
import RomanceBook from "../data/romance.json"

class AllBooks extends Component{
    render(){
        return(
                <Accordion defaultActiveKey="">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>fantasy</Accordion.Header>

                    <Accordion.Body>
                  
                    <Row className="d-flex justify-content-center">
                    {FantasyBooks.slice(0,8).map((book) => {
                        return (
                        
                            <Card key={book.asin} style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src={book.img}
                                id="bookCover"
                            />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>Prezzo: {book.price}€</Card.Text>
                                <Button variant="outline-secondary">Anteprima</Button>{' '}
                            </Card.Body>
                            </Card>
                        
                        );
                    })}
                    </Row>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Scifi</Accordion.Header>
                    <Accordion.Body>
               
            <Row className="d-flex justify-content-center">

                {ScifiBook.slice(0,8).map((book)=>{
                    return(
                        
                        
                        <Card key={book.asin} style={{ width: '18rem' }}>
                            <Card.Img 
                            variant="top" 
                            src={book.img}
                            id="idBookCover"/>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>Prezzo: {book.price}</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                             
                             
                             )
                            })
                        }             
                   
                        </Row>
                  
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                    <Accordion.Header>History</Accordion.Header>
                    <Accordion.Body>
               
            <Row className="d-flex justify-content-center">

                {HistoryBook.slice(0,8).map((book)=>{
                    return(
                        
                        
                        <Card key={book.asin} style={{ width: '18rem' }}>
                            <Card.Img 
                            variant="top" 
                            src={book.img}
                            id="idBookCover"/>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>Prezzo: {book.price}</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                             
                             
                             )
                            })
                        }             
                   
                        </Row>
                  
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                    <Accordion.Header>Romance</Accordion.Header>
                    <Accordion.Body>
               
            <Row className="d-flex justify-content-center">

                {RomanceBook.slice(0,8).map((book)=>{
                    return(
                        
                        
                        <Card key={book.asin} style={{ width: '18rem' }}>
                            <Card.Img 
                            variant="top" 
                            src={book.img}
                            id="idBookCover"/>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>Prezzo: {book.price}</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                             
                             
                             )
                            })
                        }             
                   
                        </Row>
                  
                        </Accordion.Body>
                    </Accordion.Item>

                  
                 </Accordion>
                );
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            }


}export default AllBooks;

// xs={12} md={4} lg={3}