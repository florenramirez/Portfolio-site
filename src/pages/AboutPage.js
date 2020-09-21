import React from 'react';
import Typo from '../../src/components/Typo';
import Content from '../../src/components/Content';

function AboutPage(props){

        return(
            <div>
                <Typo title={props.title} />
                <Content>
                    <p>During the last year I worked freelance as a photographer and content producer for commercial brands and professionals in various fields who had communication actions in the multimedia Perfil (Caras Magazine, Digital Caras, News, Marie Claire, etc.). Both writers and personalities like Mauro Colagreco.</p>
                    <p>You can see more works here: <a href='https://www.instagram.com/phflorenramirez/'>Instagram</a>  </p>                
                </Content>
            </div>
        )
}

export default AboutPage;