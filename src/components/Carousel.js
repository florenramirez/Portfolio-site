import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import diogo from '../../src/img/portada.jpg';
import simonian from '../../src/img/IMG_2418.JPG';
import castelli from '../../src/img/IMG_0584.JPG';
import Card from '../components/Card';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Diogo Bianchi',
                    subtitle: 'Coffee Master',
                    imgSrc: diogo,
                    link: 'https://www.instagram.com/tv/B7D4Z4oJOnD/',
                    selected: false,

                },
                {
                    id: 1,
                    title: 'Simonian',
                    subtitle: 'Simonian Alianzas',
                    imgSrc: simonian,
                    link: 'https://www.instagram.com/p/CCEHX44nHle/',
                    selected: false,

                },
                {
                    id: 2,
                    title: 'Mar Castelli',
                    subtitle: 'Private Masterclass Feb/20',
                    imgSrc: castelli,
                    link: 'https://www.instagram.com/tv/B8ztsudpw_M/',
                    selected: false,

                },
            ]
        }
    }

    handleCardClick = (id,card) => {

        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        })

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card  item={item} click={(e=> this.handleCardClick(item.id, e))} key={item.id}/>
        } )

    }

    render(){
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>

            </Container>
        )
    }

}

export default Carousel;