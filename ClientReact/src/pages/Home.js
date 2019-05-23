import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Home.css';
import { Deneme } from './split.jsx'

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
      <div style={{margin:"15px"}}>
          <NavLink to='/login'>Oturum aç</NavLink>
          <NavLink to='/register'>Kayıt ol</NavLink>
      </div>
        <Deneme/>
      </div>
    );
  }
}

export default Home;
