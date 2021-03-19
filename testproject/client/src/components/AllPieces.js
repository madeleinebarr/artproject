import React, { Fragment, useEffect, useState } from 'react';
import Piece from './Piece';

const AllPieces = (props) => {


        // this works
        if (props.startyear === '' && props.culture === '') {
            console.log('We get all pieces');
        } else if (props.startyear !== '' && props.culture === '') {
            console.log('We get pieces based on time only');
        } else if (props.startyear === '' && props.culture !== '') {
            console.log('We get pieces based on place only');
        } else if (props.startyear !== '' && props.culture !== '') {
            console.log('We get pieces based on time and place');
        } else {
            console.log('something went wrong')
        }

        

        const [pieces, setPieces] = useState([]);

        const piecesendpoint = "http://localhost:5000/pieces";

        const getPieces = async (startyear, endyear, artist_nationality, culture, country) => {
            try {

                let response; 
                if (props.startyear === '' && props.culture === '') {
                    response = await fetch(piecesendpoint);
                } else if (props.startyear !== '' && props.culture === '') {
                    response = await fetch(`http://localhost:5000/pieces/daterange/${startyear}/${endyear}`);
                } else if (props.startyear === '' && props.culture !== '') {
                    response = await fetch(`http://localhost:5000/pieces/region/${artist_nationality}/${culture}/${country}`);
                } else if (props.startyear !== '' && props.culture !== '') {
                    response = await fetch(`http://localhost:5000/pieces/daterange/${startyear}/${endyear}/region/${artist_nationality}/${culture}/${country}`);
                }
                
                const jsonData = await response.json();
                setPieces(jsonData);
            } catch (err) {
                console.error(err.message)
            }
        }

        let startyear = parseFloat(props.startyear);
        let endyear = parseFloat(props.endyear);
        let artist_nationality = props.artist_nationality;
        let culture = props.culture;
        let country = props.country;

        useEffect(() => {
            getPieces(startyear, endyear, artist_nationality, culture, country);
        }, [startyear, endyear, artist_nationality, culture, country]);

        console.log(pieces.length);
    

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