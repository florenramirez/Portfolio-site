import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Typo (props){

    return (
        <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} cm={12}>
                        { props.title && <h3 className='display-3 font-weight-bolder'>{props.title}</h3> }
                        { props.subtitle && <h4 className='display-4 font-weight-light'>{props.subtitle}</h4> }
                        { props.text && <h4 className='lead font-weight-light'>{props.text}</h4> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Typo; 