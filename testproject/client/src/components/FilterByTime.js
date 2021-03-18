import React from 'react';

class FilterByTime extends React.Component {
    constructor(props) {
        super(props);
        this.handleTimeFilterChange = this.handleTimeFilterChange.bind(this);
    }

    handleTimeFilterChange(e) {
        let value = e.target.value;
        let startyear = e.target[e.target.selectedIndex].getAttribute('startyear');
        let endyear = e.target[e.target.selectedIndex].getAttribute('endyear');
        this.props.onTimeFilterChange(value, startyear, endyear);

        
        
    }

    render() {
        return (
                <select value={this.props.value} startyear={this.props.startyear} endyear={this.props.endyear} onChange={this.handleTimeFilterChange} >
                <option value="All" startyear="All" endyear="All">All</option>
                <option value="1600-1700" startyear="1600" endyear="1700">1600-1700</option>
                <option value="1700-1800" startyear="1700" endyear="1800">1700-1800</option>
                </select>
        )
    }
}

export default FilterByTime;