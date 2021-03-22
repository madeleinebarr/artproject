import React from 'react';

class FilterByTheme extends React.Component {
    constructor(props) {
        super(props);
        this.handleThemeFilterChange= this.handleThemeFilterChange.bind(this);
    }

    handleThemeFilterChange(e) {
        let theme = e.target[e.target.selectedIndex].getAttribute('theme');
        this.props.onThemeFilterChange(theme);
    }

    render() {
        return (
            <select theme={this.props.theme} onChange={this.handleThemeFilterChange}>
                <option theme="">Select a theme</option>
                <option theme="">All</option>
                <option theme="Moon">Moon</option>
                <option theme="Lakes">Lakes</option>
            </select>
        )
    }
}

export default FilterByTheme;