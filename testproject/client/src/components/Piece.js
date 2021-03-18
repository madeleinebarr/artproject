import React from 'react';

function Piece(props) {
    return (
        <div className="piece" key={props.objectid}>
                    <img className="piece-image" src={props.primary_image_small} alt={props.title}></img>
                    <p className="piece-title">{props.title}</p>
                    <p className="piece-artist">{props.artist_display_name}</p>
                    <p className="piece-date">{props.object_end_date}</p>
        </div> 
    )
}

export default Piece;