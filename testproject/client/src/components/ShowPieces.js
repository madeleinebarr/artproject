import React, { useEffect } from 'react';
import AllPieces from './AllPieces';
import FilterByTime from './FilterByTime';
import FilterByPlace from './FilterByPlace';
import TimePieces from './TimePieces';
import PlacePieces from './PlacePieces';
import ThemePieces from './ThemePieces';

class ShowPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'All',
            startyear: 'All',
            endyear: 'All',
            artist_nationality: '',
            culture: '',
            country: '',
        };

        this.handleTimeFilterChange = this.handleTimeFilterChange.bind(this);
        this.handlePlaceFilterChange = this.handlePlaceFilterChange.bind(this);
    }

    handleTimeFilterChange(value, startyear, endyear) {
        this.setState({
            value: value,
            startyear: startyear,
            endyear: endyear
        });
    }

    handlePlaceFilterChange(artist_nationality, culture, country) {
        this.setState({
            artist_nationality: artist_nationality,
            culture: culture,
            country: country
        });
    }


    render() {

        // show all pieces by default
    

        // let pieces;
        
        // let currentTimeValue = this.state.startyear;        

        // if (currentTimeValue === 'All') {
        //     console.log('We will show all pieces!')
        //     pieces = <AllPieces />;
        // } else {
        //     console.log('We will show some pieces!')
        //     pieces = <TimePieces 
        //         startyear={this.state.startyear}
        //         endyear={this.state.endyear}
        //     />;
        // }

    
        return (
            <div className="pieces-container">
                <form className="filter-forms">

                        <FilterByTime 
                        value={this.state.value}
                        startyear={this.state.startyear}
                        endyear={this.state.endyear}
                        onTimeFilterChange={this.handleTimeFilterChange} />

                        <FilterByPlace
                        value={this.state.value}
                        artist_nationality={this.state.artist_nationality}
                        culture={this.state.culture}
                        country={this.state.country}
                        onPlaceFilterChange={this.handlePlaceFilterChange} />


                </form>

                {/* <div>
                    {pieces}
                </div> */}

                <AllPieces />


                {/* <TimePieces 
                startyear={this.state.startyear}
                endyear={this.state.endyear}
            /> */}

                {/* <PlacePieces
                artist_nationality={this.state.artist_nationality}
                culture={this.state.culture}
                country={this.state.country}
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