import React, { useState} from 'react';
import api from './services/api';
import './App.css';
 
import logo from './assets/logo.svg';

import Routes from './routes';




function App() {

  const [ email, setEmail ] = useState(''); // retorna um vertor com 2 posi

  async function handleSubmit(event){
    event.preventDefault();

    const reponse = await api.post('/sessions', { email });

    const { _id } = reponse.data;

    localStorage.setItem('user' , _id); 
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        
      </div>
    </div>
  );
}

export default App;
