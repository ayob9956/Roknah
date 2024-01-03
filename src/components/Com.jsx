import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { GoogleAuthProvider,signInWithPopup } from '@firebase/auth';
import { auth } from '../components/firebase/firebaseConfig';




const Com = () => {
  const [validated, setValidated] = useState(false);
  const [UeserName, setUeserName] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      axios
        .post("https://6552c0675449cfda0f2dca61.mockapi.io/uesers", {
          UeserName: UeserName,
          Email: Email,
          phone: phone,
          Password: Password
        })
        .then((response) => {
         
        })
    
    }

    setValidated(true);
  };


  const handelgoogel = async (e)=>{
    const provider = await new GoogleAuthProvider ();
    return signInWithPopup( auth, provider);

  }

  return (
   (<>
   
   <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control 
          required
          type="text"
          placeholder="Enter user name"
          pattern=".{4,}"
          value={UeserName}
          onChange={(e) => setUeserName(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a user name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          required
          type="tel"
          placeholder="Enter phone number"
          pattern="05[0-9]{8}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid phone number.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Enter password"
          pattern=".{6,}"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a password.
        </Form.Control.Feedback>
      </Form.Group>

      <Button  type="submit">Submit</Button>
    </Form>

    <button onClick={handelgoogel} className='w-[30vh] bg-orange-400 h-14 m-10'>goooogel </button>
   
   </>)
    



  );
};

export default Com;