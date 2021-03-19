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
                <option startyear="" endyear="">Select a time period</option>
                <option startyear="" endyear="">All</option>
                <option startyear="1300" endyear="1400">1300-1400</option>
                <option startyear="1400" endyear="1500">1400-1500</option>
                <option startyear="1500" endyear="1600">1500-1600</option>
                <option startyear="1600" endyear="1700">1600-1700</option>
                <option startyear="1700" endyear="1800">1700-1800</option>
                <option startyear="1800" endyear="1900">1800-1900</option>
                </select>
        )
    }
}

export default FilterByTime;