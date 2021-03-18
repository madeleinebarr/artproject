import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import FilterPieces from './FilterPieces';
import ShowPieces from './ShowPieces';
import FilterByTime from './FilterByTime';

class App extends React.Component {
  render() {
  return (
      <div className="artproject">
        <NavBar />
       {/* <FilterPieces /> */}
       {/* <FilterByTime /> */}
        <ShowPieces />
        </div>
  );
  }
}

export default App;
