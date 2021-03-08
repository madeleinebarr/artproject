import React, { Fragment, useEffect, useState } from 'react';

const TimePieces = () => {

    const [timepieces, setTimePieces] = useState([]);

    // const getTimePieces = async (timePeriod) => {
    //     try {
    //         const response = await fetch("http://localhost:5000/pieces/daterange/1800/1900");
    //         const jsonData = await response.json();
    //         setTimePieces(jsonData);
    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // }
  

    const getTimePieces = async (startYear, endYear) => {
        try {
            const response = await fetch(`http://localhost:5000/pieces/daterange/${startYear}/${endYear}`);
            const jsonData = await response.json();
            setTimePieces(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    // useEffect(() => {
    //     getTimePieces();
    // }, []);

    return (
        <Fragment>
            <button onClick = {() => getTimePieces(1700, 1800)}>Get time pieces</button>
            {/* <form className="filter-forms">
                <select name="time-period" onChange={() => getTimePieces(1700, 1800)}>
                <option value="">Select a time period</option>
                <option value="1800-1900" startyear="1800" endyear="1900">1800-1900</option>
                <option value="1900-2000">1900-2000</option>
                </select>
            </form> */}

                {timepieces.map(piece => (
                <div className="piece" key={piece.objectid}>
                    <img className="piece-image" src={piece.primary_image_small} alt={piece.title}></img>
                    <p className="piece-title">{piece.title}</p>
                    <p className="piece-artist">{piece.artist_display_name}</p>
                    <p className="piece-date">{piece.object_end_date}</p>
                </div> 
                ))}
           
            </Fragment>
    )
}

export default TimePieces;
