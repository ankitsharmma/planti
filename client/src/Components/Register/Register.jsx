import React, { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';

import banner from '../../Assets/bannerImg.jpeg'
import './Register.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import video from '../../Assets/video.mp4'; // Make sure you have this asset
import logo from '../../Assets/logo.png'; // Make sure you have this asset
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep",
    "Delhi", "Puducherry", "Jammu and Kashmir", "Ladakh"
];
const segments = [
    "Equity Cash/Intraday",
    "Options (Call-Put)",
    "Futures (Derivatives)",
    "Index",
    "Commodity"
];
const investments = [
    "Above Rs 50000",
    "Above 1 Lac",
    "Above 3 Lakh",
    "Above 5 Lakh"
];
const languages = [
    "English", "Hindi", "Marathi", "Gujarati", 
    "Tamil", "Telugu", "Malayalam", 
    "Kannada", "Bengali", "Oriya"
];

const Register = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedSegment, setSelectedSegment] = useState('');
    const [selectedInvestment, setSelectedInvestment] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('1234');
    const [phone, setPhone] = useState('');
    const navigateTo = useNavigate();

    const createUser = (e) => {
        e.preventDefault();

        // Validate required fields
        if (!email || !userName || !password || !phone || !selectedState || !selectedSegment || !selectedInvestment || !selectedLanguage) {
            alert("Please fill in all fields");
            return;
        }

        Axios.post('http://localhost:3002/register', {
            Email: email,
            UserName: userName,
            Password: password,
            Phone: phone,
            State: selectedState,
            Segment: selectedSegment,
            Investment: selectedInvestment,
            Language: selectedLanguage,
        })
        .then((response) => {
            console.log(response.data); // Log the response
            navigateTo('/');
            // Clear fields
            setEmail('');
            setUserName('');
            setPassword(''); // Reset to default or change to empty string
            setPhone('');
            setSelectedState('');
            setSelectedSegment('');
            setSelectedInvestment('');
            setSelectedLanguage('');
        })
        .catch((error) => {
            console.error("There was an error registering the user!", error);
            alert("Error: " + error.response?.data?.message || "Something went wrong!");
        });
    };

    return (
        <div className="app">
        <div className="container">
          <div className="form-section">
            <div className="logo">
              <h1>RUMMY MARKETING</h1>
            </div>
  
            <form action="" className="form grid" onSubmit={createUser}>
                          <div className="input-group">
                              
                              <div className="input-group flex">
                                  <FaUserShield className="icon" />
                                  <label htmlFor="username">Full Name</label>
                                  <input type="text" id='username' placeholder='Enter Fullname'
                                      onChange={(event) => setUserName(event.target.value)} required />
                              </div>
                          </div>
  
                          <div className="input-group">
                             
                              <div className="input-group flex">
                                  <MdMarkEmailRead className="icon" />
                                  <label htmlFor="phone">Mobile Number</label>
                                  <input type="tel" id='phone' placeholder='Enter Mobile Number'
                                      onChange={(event) => setPhone(event.target.value)} required />
                              </div>
                          </div>
  
                          <div className="input-group">
                              
                              <div className="input-group flex">
                              <MdMarkEmailRead className="icon" />
                              <label htmlFor="email">Email</label>
                                 
                                  <input type="email" id='email' placeholder='Enter Email'
                                      onChange={(event) => setEmail(event.target.value)} required />
                              </div>
                          </div>
  
                          <div className="input-group">
                             
                              <div className="input-group flex">
                                  <MdLocationOn className="icon" />
                                  <label htmlFor="state">State</label>
                                  <select
                                      id="state"
                                      value={selectedState}
                                      onChange={(event) => setSelectedState(event.target.value)}
                                      required
                                  >
                                      <option value="">Select a State</option>
                                      {states.map((state, index) => (
                                          <option key={index} value={state}>
                                              {state}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                          </div>
  
                          <div className="input-group">
                           
                              <div className="input-group flex">
                              <label htmlFor="segment">Segment</label>
                                  <select
                                      id="segment"
                                      value={selectedSegment}
                                      onChange={(event) => setSelectedSegment(event.target.value)}
                                      required
                                  >
                                      <option value="">Select a Segment</option>
                                      {segments.map((segment, index) => (
                                          <option key={index} value={segment}>
                                              {segment}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                          </div>
  
                          <div className="input-group">
                           
                              <div className="input-group flex">
                              <label htmlFor="investment">Investment</label>
                                  <select
                                      id="investment"
                                      value={selectedInvestment}
                                      onChange={(event) => setSelectedInvestment(event.target.value)}
                                      required
                                  >
                                      <option value="">Select an Investment</option>
                                      {investments.map((investment, index) => (
                                          <option key={index} value={investment}>
                                              {investment}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                          </div>
  
                          <div className="input-group">
                              
                              <div className="input-group flex">
                              <label htmlFor="language">Language</label>
                                  <select
                                      id="language"
                                      value={selectedLanguage}
                                      onChange={(event) => setSelectedLanguage(event.target.value)}
                                      required
                                  >
                                      <option value="">Select a Language</option>
                                      {languages.map((language, index) => (
                                          <option key={index} value={language}>
                                              {language}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                          </div>
  
                          <div className="input-group passwordDiv">
                         
                              <div className="input-group flex">
                              <label htmlFor="password">Password</label>
                                  <BsFillShieldLockFill className="icon" />
                                  <input type="password" id='password' placeholder='Enter Password'
                                      onChange={(event) => setPassword(event.target.value)} />
                              </div>
                          </div>
  
                          <button type='submit' className='btn flex'>
                              <span>Register</span>
                              <AiOutlineSwapRight className="icon" />
                          </button>
  
                          <div className="footerDiv flex">
                              <span className="text">Have an account?</span>
                              <Link to={'/'}>
                                  <button className="btn">Login</button>
                              </Link>
                          </div>
                      </form>
          </div>
  
          <div className="promo-section">
            <div className="winner-image">
              {/* Replace with the actual image URL */}
              <img src={banner} alt="Nikhil Sharma" />
            </div>
  
            <div className="promo-info">
              <h2>PLAY RUMMY WIN CASH PRIZ<span className="highlight">ES</span></h2>
              <p>I WON</p>
              <h1 className="prize-amount">1.25 LAKH</h1>
              <p>Saturday Showdown <br/> 15<sup>th</sup> Jan 2024</p>
            </div>
          </div>
        </div>
  
        <footer>
          <p>© Copyright Rummy Marketing. All Rights Reserved</p>
        </footer>
      </div>
    );
}

export default Register;
