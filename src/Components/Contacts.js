import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import './../App.css';
import { useDispatch } from 'react-redux';
import { deleteContactAction } from './actions/Actions';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  return (
    <div>
      <table className='table border container mt-5 '>
        <thead className='bg-success text-white'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactObj, index) => (
            <tr key={index}>
              <td>
                <Avatar
                  className='mr-2'
                  name={contactObj.name}
                  round={true}
                  size='45'
                />
                {contactObj.name}
              </td>
              <td>{contactObj.email}</td>
              <td>{contactObj.phone}</td>
              <td>
                <div className='actions'>
                  <Link to={`/editcontact/${contactObj.id}`}>
                    <span className='fa fa-edit mr-3'></span>
                  </Link>
                  <Link to='#'>
                    <span
                      className='fa fa-remove'
                      onClick={() =>
                        dispatch(deleteContactAction(contactObj.id))
                      }
                    ></span>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
