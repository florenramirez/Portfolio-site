import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Typo from '../../src/components/Typo';
import Content from '../../src/components/Content';

class ContactPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }
    
    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            disabled: true
        })

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res =>{
                if(res.data.success){
                    this.setState({
                        disabled: false,
                        emailSent: true
                    })
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    })  
                }
                
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                })
            })
    }


    render (){
        return(
            <div>
                <Typo title={this.props.title} />
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor='full-name'>Full Name</Form.Label>
                            <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='full-email'>Email</Form.Label>
                            <Form.Control id='full-email' name='email' type='email' value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='full-message'>Message</Form.Label>
                            <Form.Control id='full-message' name='message' as='textarea' rows='3' value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button className='d-inline-block' variant='primary' type='submit' disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent</p> }
                        {this.state.emailSent === false && <p className='d-inline error-msg'>Email Not Sent</p> }
                    </Form>

                </Content>
            </div>
        )
    }
    
}

export default ContactPage;