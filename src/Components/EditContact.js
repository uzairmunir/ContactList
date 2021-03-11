import React, { useState, useEffect } from 'react';
import { editContactAction } from './actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { updateContactAction } from './actions/Actions';

const EditContact = () => {
  const { id } = useParams();
  const contact = useSelector((state) => state.contact);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
    dispatch(editContactAction(id));
  }, [contact]);
  const updateContact = (e) => {
    e.preventDefault();
    const updatedContact = Object.assign(contact, {
      name: name,
      email: email,
      phone: phone,
    });
    dispatch(updateContactAction(updatedContact));
    navigate('/');
  };
  return (
    <div className='container mt-5 w-50'>
      <form onSubmit={updateContact}>
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

        <button type='submit' className='btn btn-success mt-3'>
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
