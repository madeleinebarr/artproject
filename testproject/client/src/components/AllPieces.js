import React, { Fragment, useEffect, useState } from 'react';
import Piece from './Piece';
import ThemePieces from './ThemePieces';

const AllPieces = (props) => {

        let timeIsSelected = (props.startyear === '') ? false : true;
        let placeIsSelected = (props.culture === '') ? false : true;
        let themeIsSelected = (props.theme === '') ? false : true;

        let wantAllPieces = (!timeIsSelected && !placeIsSelected && !themeIsSelected) ? true : false;
        let wantOnlyTimePieces = (timeIsSelected && !placeIsSelected && !themeIsSelected) ? true : false;
        let wantOnlyPlacePieces = (!timeIsSelected && placeIsSelected && !themeIsSelected) ? true : false;
        let wantTimeAndPlacePieces = (timeIsSelected && placeIsSelected && !themeIsSelected) ? true : false;
        let wantOnlyThemePieces = (!timeIsSelected && !placeIsSelected && themeIsSelected) ? true : false;

        // this works
        if (wantAllPieces) {
            console.log('We get all pieces');
        } else if (wantOnlyTimePieces) {
            console.log('We get pieces based on time only');
        } else if (wantOnlyPlacePieces) {
            console.log('We get pieces based on place only');
        } else if (wantTimeAndPlacePieces) {
            console.log('We get pieces based on time and place');
        } else if(wantOnlyThemePieces) {
            console.log('We get pieces based on theme only');
        }
        else {
            console.log('something went wrong')
        }

        

        const [pieces, setPieces] = useState([]);

        const piecesendpoint = "http://localhost:5000/pieces";

        const getPieces = async (startyear, endyear, artist_nationality, culture, country, theme) => {
            try {

                let response; 
                if (wantAllPieces) {
                    response = await fetch(piecesendpoint);
                } else if (wantOnlyTimePieces) {
                    response = await fetch(`${piecesendpoint}/daterange/${startyear}/${endyear}`);
                } else if (wantOnlyPlacePieces) {
                    response = await fetch(`${piecesendpoint}/region/${artist_nationality}/${culture}/${country}`);
                } else if (wantTimeAndPlacePieces) {
                    response = await fetch(`${piecesendpoint}/daterange/${startyear}/${endyear}/region/${artist_nationality}/${culture}/${country}`);
                } else if (wantOnlyThemePieces) {
                    response = await fetch(`${piecesendpoint}/tags/${theme}`);
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
        let theme = props.theme;

        useEffect(() => {
            getPieces(startyear, endyear, artist_nationality, culture, country, theme);
        }, [startyear, endyear, artist_nationality, culture, country, theme]);

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