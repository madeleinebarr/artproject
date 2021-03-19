import React, { useEffect } from 'react';
import AllPieces from './AllPieces';
import FilterByTime from './FilterByTime';
import FilterByPlace from './FilterByPlace';
import FilterByTheme from './FilterByTheme';
import TimePieces from './TimePieces';
import PlacePieces from './PlacePieces';
import ThemePieces from './ThemePieces';

class ShowPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startyear: '',
            endyear: '',
            artist_nationality: '',
            culture: '',
            country: '',
            theme: ''
        };

        this.handleTimeFilterChange = this.handleTimeFilterChange.bind(this);
        this.handlePlaceFilterChange = this.handlePlaceFilterChange.bind(this);
        this.handleThemeFilterChange = this.handleThemeFilterChange.bind(this);
    }

    handleTimeFilterChange(startyear, endyear) {
        this.setState({
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

    handleThemeFilterChange(theme) {
        this.setState({
            theme: theme
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
                        startyear={this.state.startyear}
                        endyear={this.state.endyear}
                        onTimeFilterChange={this.handleTimeFilterChange} />

                        <FilterByPlace
                        artist_nationality={this.state.artist_nationality}
                        culture={this.state.culture}
                        country={this.state.country}
                        onPlaceFilterChange={this.handlePlaceFilterChange} />

                        <FilterByTheme
                        theme={this.state.theme}
                        onThemeFilterChange={this.handleThemeFilterChange} />


                </form>

                {/* <div>
                    {pieces}
                </div> */}

                <AllPieces 
                        startyear={this.state.startyear}
                        endyear={this.state.endyear}
                        artist_nationality={this.state.artist_nationality}
                        culture={this.state.culture}
                        country={this.state.country}
                        theme={this.state.theme}
                />


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