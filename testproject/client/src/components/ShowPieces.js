import React, { useEffect } from 'react';
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
    

        let pieces;
        
        let currentTimeValue = this.state.startyear;        

        if (currentTimeValue === 'All') {
            console.log('We will show all pieces!')
            pieces = <AllPieces />;
        } else {
            console.log('We will show some pieces!')
            pieces = <TimePieces 
                startyear={this.state.startyear}
                endyear={this.state.endyear}
            />;
        }

    
        return (
            <div className="pieces-container">
                <FilterByTime 
                value={this.state.value}
                startyear={this.state.startyear}
                endyear={this.state.endyear}
                onTimeFilterChange={this.handleTimeFilterChange} />

                <div>
                    {pieces}
                </div>
                {/* <TimePieces 
                startyear={this.state.startyear}
                endyear={this.state.endyear}
            /> */}
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