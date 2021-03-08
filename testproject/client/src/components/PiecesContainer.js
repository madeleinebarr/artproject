import React from 'react';
import Pieces from './Pieces';
import TimePieces from './TimePieces';

class PiecesContainer extends React.Component {
    render() {
        return (
            <div className="pieces-container">
                {/* <Pieces /> */}
                <TimePieces />
            </div>
        )
    }
}

export default PiecesContainer;