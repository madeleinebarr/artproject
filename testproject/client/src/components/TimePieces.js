import React, { Fragment, useEffect, useState } from 'react';
import Piece from './Piece';

const TimePieces = () => {

    const [timepieces, setTimePieces] = useState([]);
  

    const getTimePieces = async (startYear, endYear) => {
        try {
            const response = await fetch(`http://localhost:5000/pieces/daterange/${startYear}/${endYear}`);
            const jsonData = await response.json();
            setTimePieces(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    // this was commented out before but I am putting it back in momentarily
    useEffect(() => {
        getTimePieces(1700, 1800);
    }, []);

    console.log(timepieces.length);

    return (
        <Fragment>

                {timepieces.map(piece => (
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

export default TimePieces;
