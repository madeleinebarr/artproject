import React from 'react';

class FilterByTime extends React.Component {
    constructor(props) {
        super(props);
        this.handleTimeFilterChange = this.handleTimeFilterChange.bind(this);
    }

    handleTimeFilterChange(e) {
        let startyear = e.target[e.target.selectedIndex].getAttribute('startyear');
        let endyear = e.target[e.target.selectedIndex].getAttribute('endyear');
        this.props.onTimeFilterChange(startyear, endyear);

        
        
    }

    render() {
        return (
                <select startyear={this.props.startyear} endyear={this.props.endyear} onChange={this.handleTimeFilterChange} >
                <option startyear="" endyear="">All</option>
                <option startyear="1600" endyear="1700">1600-1700</option>
                <option startyear="1700" endyear="1800">1700-1800</option>
                </select>
        )
    }
}

export default FilterByTime;