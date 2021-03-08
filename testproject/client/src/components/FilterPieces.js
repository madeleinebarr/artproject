import React, { Fragment, useEffect, useState } from 'react';
import TimePieces, { getTimePieces } from './TimePieces';

class FilterPieces extends React.Component {
    render() {
    return (
        <Fragment>
        <form className="filter-forms">
            <select name="time-period">
                <option value="">Select a time period</option>
                <option value="all-time-periods">All</option>
                <option value="1800-1900">1800-1900</option>
                <option value="1900-2000">1800-1900</option>
            </select>
            <select name="geographical-region">
                <option value="">Select a geographical region</option>
                <option value="all-geographical-regions">All</option>
                <option value="America">America</option>
                <option value="Egypt">Egypt</option>
            </select>
            <select name="theme">
                <option value="">Select a thematic category</option>
                <option value="all-themes">All</option>
                <option value="Moon">Moon</option>
                <option value="Lakes">Lakes</option>
            </select>
        </form>
        </Fragment>

    )
    }
}

export default FilterPieces;