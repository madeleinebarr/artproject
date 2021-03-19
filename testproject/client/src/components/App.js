import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import ShowPieces from './ShowPieces';

class App extends React.Component {
  render() {
  return (
      <div className="artproject">
        <NavBar />
        <ShowPieces />
        </div>
  );
  }
}

export default App;
