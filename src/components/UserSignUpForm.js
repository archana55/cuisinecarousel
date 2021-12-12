import Modal from './Modal';
import { Button, Form } from 'react-bootstrap-v5';
import { useState } from 'react';
import classes from './UserSignUpForm.module.css'
const UserSignUpForm = props =>{
    
    const [enteredusername, setenteredusername] = useState("");
    const [usernameValid, setusernameValid] = useState("false");
    const usernameChangedHandler = (e) => {
       setenteredusername(e.target.value);
       setusernameValid(true);
    };

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
        
        let username =  /^[A-Za-z]\w{5,14}$/;
        var email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        var passw =  /^[A-Za-z]\w{5,14}$/;
        if (!(username.test(enteredusername)) || !(email.test(enteredemail)) || !(enteredpassword.match(passw)))
          {
            if (!(username.test(enteredusername)) ) {
                setusernameValid(false);
            } 
            
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

    return (
    <Modal onClose={props.onClose}>
        <header><center><h2>Signup</h2></center></header>
        <Form onSubmit={FormSubmitHandler}>

        <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Username:</Form.Label>
            <Form.Control required type="text" placeholder="Enter username" onChange={usernameChangedHandler}/>
            {!usernameValid && <Form.Text className="text-danger">Entered Username is not valid.</Form.Text>}
        </Form.Group>

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
        <div className="d-grid gap-2">
        <Button variant="primary" type="button"  onClick={FormSubmitHandler}> 
            Sign Up
        </Button>
       </div>

        </Form>

        <br /><br />
        <div className={classes.UserSignupForm}>
        <p class="text-center">Already have an account? 
                <span class='text-primary' style={{  cursor: 'pointer'}} onClick={props.onLogin}> Log In</span></p>
        <br />
        </div>
        </Modal>
    )
};

export default UserSignUpForm;