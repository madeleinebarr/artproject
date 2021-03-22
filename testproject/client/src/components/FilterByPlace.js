import React from 'react';

class FilterByPlace extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlaceFilterChange = this.handlePlaceFilterChange.bind(this);
    }

    handlePlaceFilterChange(e){
        let artist_nationality = e.target[e.target.selectedIndex].getAttribute('artist_nationality');
        let culture = e.target[e.target.selectedIndex].getAttribute('culture');
        let country = e.target[e.target.selectedIndex].getAttribute('country');

        this.props.onPlaceFilterChange(artist_nationality, culture, country);
    }

    render() {

        // const places = [
        //         {
        //             artist_nationality: 
        //         }
        // ];
        return (
            <select artist_nationality={this.props.artist_nationality} culture={this.props.culture} country={this.props.country} onChange={this.handlePlaceFilterChange}>
            
            <option artist_nationality="" culture="" country="">Select a region</option>
            <option artist_nationality="" culture="" country="">All</option>
            <option artist_nationality="German" culture="German" country="Germany">German</option>
            <option artist_nationality="Egyptian" culture="Egyptian" country="Egypt">Egypt</option>
        </select>
        )
    }
}

export default FilterByPlace;