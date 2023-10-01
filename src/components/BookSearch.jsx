/* eslint-disable react-hooks/rules-of-hooks */
import { Accordion, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import {Row } from "react-bootstrap";
import {Button } from "react-bootstrap";
import { useState } from "react";
import SingleBook from "./SingleBook";
import AllBooks from "../data/allBooks.json";




const bookSearch = (props)=>{
    
    const [search, setSearch] = useState("");
    //il filtro vuole che lo stato iniziale sia un array
    const [filteredBooks, setFilteredBooks] = useState([]);

    return (
        <Container>
            <h2 className="my-3">Cerca Libro</h2>
            <Accordion className='my-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Scrivi qui sotto il libro che stai cercando...</Accordion.Header>
                    <Accordion.Body>
                        <Form
                            className="d-flex"
                            onSubmit={(e) => {
                                e.preventDefault();
                               
                                setFilteredBooks(
                                    AllBooks.filter((book) => {
                                         return book.title.includes(search)
                                     })
                                )
                            }}
                        >
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                value={search}
                                onChange={(e) => { setSearch(e.target.value) }}
                            />
                            <Button type="submit">Search</Button>
                        </Form>
                        <Row className="d-flex justify-content-center align-items-center">
                            {
                                //mi vado a mappare l'oggetto
                                filteredBooks.map((book) => {
                                    return (
                                      <SingleBook key={book.asin} libro={book} />
                                    )
                                })
                            }
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}
 
export default bookSearch;


