import React, { useState } from 'react';
import { addNewContact, addNewContactAction } from './actions/Actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Math.random(),
      name: name,
      email: email,
      phone: phone,
    };
    console.log(newContact);
    dispatch(addNewContactAction(newContact));
    navigate('/');
  };

  return (
    <div className='container mt-5 w-50'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label for='exampleInputEmail1'>Enter Name</label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label> Enter Email</label>
          <input
            type='text'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label> Enter Phone</label>
          <input
            type='number'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Enter phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-primary mt-3'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;
