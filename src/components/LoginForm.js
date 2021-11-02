import Modal from './Modal';
import { Button, Form } from 'react-bootstrap-v5';
import { useState } from 'react';
const LoginForm = props => {
 
    const [enteredemail, setenteredemail] = useState("");
    const [emailValid, setemailValid] = useState("false");
    const emailChangedHandler = (e) => {
       setenteredemail(e.target.value);
       setemailValid(true);
    };

    const [enteredpassword, setenteredpassword] = useState("");
    const [passwordValid, setpasswordValid] = useState("false");
    const passwordChangedHandler = (e) => {
      setenteredpassword(e.target.value);
      setpasswordValid(true);
    };

    const FormSubmitHandler = (e) => {
        e.preventDefault()
        
        var email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        var passw=  /^[A-Za-z]\w{5,14}$/;
        if (!(email.test(enteredemail)) || !(enteredpassword.match(passw)))
          {
            if (!(email.test(enteredemail)) ) {
                setemailValid(false);
            }

            if(!(enteredpassword.match(passw))) {
                setpasswordValid(false);
            }            
            
            return;
          }

        props.onSubmit();
    };


    return <Modal onClose={props.onClose}>
        <header><h1>Login Form</h1></header>
        <Form onSubmit={FormSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address </Form.Label>
            <Form.Control required type="email" placeholder="Enter email" onChange={emailChangedHandler}/>
            {!emailValid && <Form.Text className="text-danger">Please enter a valid email.</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" onChange={passwordChangedHandler}/>
            {!passwordValid && <Form.Text className="text-danger">Invalid Password.</Form.Text>}
        </Form.Group>
    
        <Button variant="primary" type="button" onClick={FormSubmitHandler}> 
            Log In
        </Button>
        </Form>
    </Modal>
};

export default LoginForm;