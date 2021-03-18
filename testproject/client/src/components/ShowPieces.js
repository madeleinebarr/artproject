import React from 'react';
import AllPieces from './AllPieces';
// import TimePieces from './TimePieces';
// import PlacePieces from './PlacePieces';
import ThemePieces from './ThemePieces';
import FilterByTime from './FilterByTime';
import TimePieces from './TimePieces';

class ShowPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'All',
            startyear: 'All',
            endyear: 'All',
        };

        this.handleTimeFilterChange = this.handleTimeFilterChange.bind(this);
    }

    handleTimeFilterChange(value, startyear, endyear) {
        this.setState({
            value: value,
            startyear: startyear,
            endyear: endyear
        });

        
    }


    render() {

        // show all pieces by default
        let pieces = <AllPieces />;
        // let currentValue = this.state.value;
        
        let currentTimeValue = this.state.startyear;

        // if (currentValue === 'All') {
        //     console.log('We will show all pieces!')
        //     pieces = <AllPieces />;
        // } else {
        //     console.log('We will show some pieces!')
        //     pieces = <h1>showing some pieces</h1>;
        // }

        if (currentTimeValue !== 'All') {
            console.log('We will show some time filtered pieces!')
            pieces = <TimePieces 
                startyear={this.state.startyear}
                endyear={this.state.endyear}
            />;
        }
        return (
            <div className="pieces-container">
                {/* <form className="filter-forms">
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="All">All</option>
                    <option value="1700-1800">1700-1800</option>
                    </select>
                </form>  */}
                <FilterByTime 
                value={this.state.value}
                startyear={this.state.startyear}
                endyear={this.state.endyear}
                onTimeFilterChange={this.handleTimeFilterChange} />

                {/* <AllPieces /> */}
                {pieces}
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