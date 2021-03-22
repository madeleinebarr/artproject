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

        const years = [-5000, -3000, -1000, -500, 0, 500, 1000, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900];

        return (
           

      

                <select startyear={this.props.startyear} endyear={this.props.endyear} onChange={this.handleTimeFilterChange} >
                <option startyear="" endyear="">Select a time period</option>
                <option startyear="" endyear="">All</option>
    
                {years.map((year) => 
                <option startyear={years[years.indexOf(year)]} 
                        endyear={years[years.indexOf(year)] === years[years.length-1] ? new Date().getFullYear() : years[years.indexOf(year) + 1]}
                        key={year}>
                        {years[years.indexOf(year)]}
                        {years[years.indexOf(year) + 1] < 0 ? '' : '-'}
                        {years[years.indexOf(year)] === years[years.length-1] ? 'present' : years[years.indexOf(year) + 1]}
                        {year >= 0 ? ' C.E.' : ' B.C.E.'}
                    </option>
                    
                    )}

               
                </select>



        )
    }
}

export default FilterByTime;