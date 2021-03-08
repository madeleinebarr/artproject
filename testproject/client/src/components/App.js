import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import FilterPieces from './FilterPieces';
import PiecesContainer from './PiecesContainer';

class App extends React.Component {
  render() {
  return (
      <div className="artproject">
        <NavBar />
       <FilterPieces />
        <PiecesContainer />
        </div>
  );
  }
}

export default App;
