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
                <Link to={{
                        pathname: `piece/${props.objectid}`,
                        }} 
                        target="_blank" 
                        rel='noopener noreferrer'
                        onClick={GoToPiece}>
                    
                    <img className="piece-image" src={props.primary_image_small} alt={props.title}></img>

                    

                <div className="overlay">
                    
                    <p>
                        <span className="bold">{props.title}</span> <br></br>
                        {(props.artist_display_name) ? <span>{props.artist_display_name}<br></br></span> : ''}
                        {props.object_end_date}
                    </p>
                    </div>
                    </Link>
        </div> 
    )
}

export default Piece;