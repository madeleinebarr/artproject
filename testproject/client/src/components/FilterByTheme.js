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
                <option theme="Self-portraits">Self-portraits</option>
                <option theme="Moon">Moon</option>
                <option theme="Lakes">Lakes</option>
                <option theme="Boats">Boats</option>
                <option theme="Trees">Trees</option>
                <option theme="Flowers">Flowers</option>
                <option theme="Mountains">Mountains</option>
                <option theme="Seascapes">Seascapes</option>
                <option theme="Landscapes">Landscapes</option>
                <option theme="Madonna and Child">Madonna and Child</option>
                <option theme="Virgin Mary">Virgin Mary</option>
                <option theme="Jesus">Jesus</option>
                <option theme="Venus">Venus</option>
                <option theme="Women">Women</option>
                <option theme="Portraits">Portraits</option>
                <option theme="Sun">Sun</option>
                <option theme="Hieroglyphs">Hieroglyphs</option>
                <option theme="Arabic">Arabic</option>
                <option theme="Birds">Birds</option>
                <option theme="Food">Food</option>
                <option theme="Mythical Creatures">Mythical Creatures</option>
                <option theme="Buddhism">Buddhism</option>
                <option theme="Tombs">Tombs</option>
                <option theme="Battles">Battles</option>
            </select>

        )
    }
}

export default FilterByTheme;