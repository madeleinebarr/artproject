import React, { Fragment, useEffect, useState } from 'react';
import Piece from './Piece';

const AllPieces = () => {

        const [pieces, setPieces] = useState([]);

        const getPieces = async () => {
            try {
                const response = await fetch("http://localhost:5000/pieces");
                const jsonData = await response.json();
                setPieces(jsonData);
            } catch (err) {
                console.error(err.message)
            }
        }

        useEffect(() => {
            getPieces();
        }, []);

        console.log(pieces.length);
    
        // return (
        //     <Fragment>
        //         {pieces.map(piece => (
        //         <div className="piece" key={piece.objectid}>
        //             <img className="piece-image" src={piece.primary_image_small} alt={piece.title}></img>
        //             <p className="piece-title">{piece.title}</p>
        //             <p className="piece-artist">{piece.artist_display_name}</p>
        //             <p className="piece-date">{piece.object_end_date}</p>
        //         </div> 
        //         ))}
           
        //     </Fragment>
        // )

        return (
            <Fragment>
                {pieces.map(piece => (
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

export default AllPieces;