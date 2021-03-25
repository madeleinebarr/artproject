import React from 'react';
import { Link } from 'react-router-dom';




function Piece(props) {

    const mirrorToLocalStorage = () => {
        console.log('saving items to localstorage');
        console.log(props);
        localStorage.setItem(`piece${props.objectid}`, JSON.stringify(props));
    }

    const GoToPiece = (event) => {
        console.log('going to piece');
        mirrorToLocalStorage();
    }
    
    return (
        <div className="piece" key={props.objectid}>
                {/* <Link to={`piece/${props.objectid}`} target="_blank"> */}
                <Link to={{
                    pathname: `piece/${props.objectid}`,
                    // state: {
                    //     objectid: props.objectid
                    // }
                }} target="_blank" rel='noopener noreferrer'
                onClick={GoToPiece}>
                    {/* <p>test</p> */}
                    <img className="piece-image" src={props.primary_image_small} alt={props.title}></img>

                    </Link>
                    <p className="piece-title">{props.title}</p>
                    <p className="piece-artist">{props.artist_display_name}</p>
                    <p className="piece-date">{props.object_end_date}</p>
        </div> 
    )
}

export default Piece;