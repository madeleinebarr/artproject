import React from 'react';
import AllPieces from './AllPieces';
// import TimePieces from './TimePieces';
// import PlacePieces from './PlacePieces';
import ThemePieces from './ThemePieces';
import FilterByTime from './FilterByTime';

class ShowPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'All'
        };

        this.handleTimeFilterChange = this.handleTimeFilterChange.bind(this);
    }

    handleTimeFilterChange(value) {
        this.setState({value: value});
    }

    render() {
        return (
            <div className="pieces-container">
                {/* <form className="filter-forms">
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="All">All</option>
                    <option value="1700-1800">1700-1800</option>
                    </select>
                </form>  */}
                <FilterByTime value={this.state.value} onTimeFilterChange={this.handleTimeFilterChange} />
                <AllPieces />
            </div>
        )
    }
}

// class ShowPieces extends React.Component {
//     render() {
//         return (
//             <div className="pieces-container">
//                 <AllPieces />
//                 {/* <TimePieces /> */}
//                 {/* <PlacePieces /> */}
//                 {/* <ThemePieces /> */}
//             </div>
//         )
//     }
// }

export default ShowPieces;