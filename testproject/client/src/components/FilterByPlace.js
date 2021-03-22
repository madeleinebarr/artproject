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
            
            <option artist_nationality="" culture="" country="">Select a nationality</option>
            <option artist_nationality="" culture="" country="">All</option>
            <option artist_nationality="American" culture="American" country="United States">American</option>
            <option artist_nationality="Egyptian" culture="Egyptian" country="Egypt">Egyptian</option>
            <option artist_nationality="French" culture="French" country="France">French</option>
            <option artist_nationality="Persian" culture="Persian" country="Iran">Persian</option>
            <option artist_nationality="Afghani" culture="Afghani" country="present-day Afghanistan">Afghani</option>
            <option artist_nationality="Indian" culture="India" country="India">Indian</option>
            <option artist_nationality="Chinese" culture="China" country="China">Chinese</option>
            <option artist_nationality="Japanese" culture="Japan" country="Japan">Japanese</option>
            <option artist_nationality="Peruvian" culture="Peru" country="Peru">Peru</option>
            <option artist_nationality="Turkish" culture="Turkish" country="Turkey">Turkish</option>
            <option artist_nationality="Greek, Attic" culture="Greek" country="Greece">Greek</option>
            <option artist_nationality="Italian" culture="Italian" country="Italy">Italian</option>
            <option artist_nationality="Austrian" culture="Austrian" country="Austria">Austria</option>
            <option artist_nationality="Mexican" culture="Mexican" country="Mexico">Mexican</option>
            <option artist_nationality="Dutch" culture="Dutch" country="Belgium">Dutch</option>
            <option artist_nationality="Netherlandish" culture="South Netherlandish" country="The Netherlands">Netherlandish</option>
            <option artist_nationality="German" culture="German" country="Germany">German</option>
            <option artist_nationality="British" culture="British" country="England">British</option>
            <option artist_nationality="Spanish" culture="Spanish" country="Spain">Spanish</option>
            <option artist_nationality="Mayan" culture="Maya" country="Maya">Mayan</option>
            <option artist_nationality="Byzantine" culture="Byzantine" country="Byzantine">Byzantine</option>
            <option artist_nationality="Korean" culture="Korea" country="Korea">Korean</option>
            <option artist_nationality="Assyrian" culture="Assyrian" country="Assyria">Assyrian</option>
            <option artist_nationality="Tibetan" culture="Tibetan" country="Tibet">Tibetan</option>
            
        </select>
        )
    }
}

export default FilterByPlace;