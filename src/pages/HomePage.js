import React from 'react';
import Typo from '../../src/components/Typo';
import Carousel from '../../src/components/Carousel';

function HomePage(props){

        return(
            <div>

                <Typo title={props.title} subtitle={props.subtitle} text={props.text} />
            
                <Carousel />

            </div>
            
        )
}

export default HomePage;