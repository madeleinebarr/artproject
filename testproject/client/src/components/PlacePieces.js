import React, { Fragment, useEffect, useState } from 'react';
import Piece from './Piece';

const PlacePieces = (props) => {
    const [placepieces, setPlacePieces] = useState([]);

    const getPlacePieces = async (artist_nationality, culture, country) => {
        try {
            const response = await fetch(`http://localhost:5000/pieces/region/${artist_nationality}/${culture}/${country}`);
            const jsonData = await response.json();
            setPlacePieces(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    let artist_nationality = props.artist_nationality;
    let culture = props.culture;
    let country = props.country;

    useEffect(() => {
        getPlacePieces(artist_nationality, culture, country);
    }, [artist_nationality, culture, country]);

    console.log(placepieces.length);

    return (
        <Fragment>
            {placepieces.map(piece => (
                <Piece 
                key={piece.objectid} 
                primary_image_small={piece.primary_image_small} 
                title={piece.title} 
                artist_display_name={piece.artist_display_name}
                object_end_date={piece.object_end_date}
                />
            ))}
        </Fragment>
    )
}

export default PlacePieces;