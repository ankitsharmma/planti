import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Ensure Axios is imported
import './listing.css';
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import img from '../../../../Assets/images (1).png';
import user1 from '../../../../Assets/aldi.jpg';
import user2 from '../../../../Assets/dadang.jpg';
import user3 from '../../../../Assets/gilbert.jpg';
import user4 from '../../../../Assets/aldi.jpg';

const Listing = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="lisitingSection">
      <div className="tableContainer">
        <table className="styledTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>State</th>
              <th>Segment</th>
              <th>Invenstment</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
  {users
    .filter((user) => user.id !== 1) // Exclude user with id 1
    .map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.state}</td>
        <td>{user.segment}</td>
        <td>{user.investment}</td>
        <td>{user.lang}</td>
      </tr>
    ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Listing;
