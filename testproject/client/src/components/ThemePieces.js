import React, { Fragment, useEffect, useState } from 'react';
import Piece from './Piece';

const ThemePieces = () => {
    const [themepieces, setThemePieces] = useState([]);

    const getThemePieces = async (tag) => {
        try {
            const response = await fetch(`http://localhost:5000/pieces/tags/${tag}`);
            const jsonData = await response.json();
            setThemePieces(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    } 

    useEffect(() => {
        getThemePieces('Moon');
    }, []);

    console.log(themepieces.length);

    return(
        <Fragment>
            {themepieces.map(piece => (
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

export default ThemePieces;