import React from 'react';

class FilterByTime extends React.Component {
    constructor(props) {
        super(props);
        this.handleTimeFilterChange = this.handleTimeFilterChange.bind(this);
    }

    handleTimeFilterChange(e) {
        this.props.onTimeFilterChange(e.target.value);
    }

    render() {
        return (
            <form className="filter-forms">
                <select value={this.props.value} onChange={this.handleTimeFilterChange}>
                <option value="All">All</option>
                <option value="1700-1800">1700-1800</option>
                </select>
            </form>
        )
    }
}

// function FilterByTime(props) {
//     return (
//         <form className="filter-forms">
//             <select value={props.value} onChange={props.handleChange}>
//             <option value="All">All</option>
//             <option value="1700-1800">1700-1800</option>
//             </select>
//         </form>
//     )
// }

export default FilterByTime;