import React from 'react';
import AllPieces from './AllPieces';
import FilterByTime from './FilterByTime';
import FilterByPlace from './FilterByPlace';
import FilterByTheme from './FilterByTheme';

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


                <AllPieces 
                        startyear={this.state.startyear}
                        endyear={this.state.endyear}
                        artist_nationality={this.state.artist_nationality}
                        culture={this.state.culture}
                        country={this.state.country}
                        theme={this.state.theme}
                />


        
            </div>
        )
    }
}


export default ShowPieces;