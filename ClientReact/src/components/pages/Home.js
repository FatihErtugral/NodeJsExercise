import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <h2>Merhaba Dünya!</h2>
        </div>
        <ul>
          <li><Link to='/login'>Oturum aç</Link></li>
          <li><Link to='/register'>Kayıt ol</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
