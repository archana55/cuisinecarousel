import Modal from './Modal';
import { Button, Form } from 'react-bootstrap-v5';
import { useState } from 'react';
import classes from './LoginForm.module.css';
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
        <header><center><h2>Login</h2></center></header>
        <Form onSubmit={FormSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" onChange={emailChangedHandler}/>
            {!emailValid && <Form.Text className="text-danger">Please enter a valid email.</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control required type="password" placeholder="Password" onChange={passwordChangedHandler}/>
            {!passwordValid && <Form.Text className="text-danger">Invalid Password.</Form.Text>}
        </Form.Group>

        <br />
        <div className ="text-center">
        <Button variant="primary" type="button"  onClick={FormSubmitHandler}> 
            Log In
        </Button>
        </div>
        </Form>
        <br /><br />
        <div className={classes.LoginForm}>
        <p class="text-center">Forgot <span class='text-primary' style={{  cursor: 'pointer'}}>Password?</span></p>
        <p class="text-center">Don't have an account? 
                <span class='text-primary' style={{  cursor: 'pointer'}} onClick={props.onSignUp}> Sign Up</span></p>
        <br />
        </div>
    </Modal>
};

export default LoginForm;