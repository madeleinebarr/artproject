import React from 'react';

// this works
// function Piece(props) {
//     return (
//         <div className="piece" key={props.objectid}>
//                     <img style={{cursor: 'pointer'}} className="piece-image" src={props.primary_image_small} alt={props.title}></img>
//                     <p className="piece-title">{props.title}</p>
//                     <p className="piece-artist">{props.artist_display_name}</p>
//                     <p className="piece-date">{props.object_end_date}</p>
//         </div> 
//     )
// }

class Piece extends React.Component {

    objectIDRef = React.createRef();

    goToPiece = (event) => {
        console.log('going to piece');
        const objectid = this.props.objectid;
        console.log(objectid);
        // const piecenumber = this.objectIDRef.current;
        // console.log(piecenumber);
        // this.props.history.push(`/piece/123`);
        console.log(this);
    }
    
    render() {
        return (
            <div className="piece" key={this.props.objectid} onClick={this.goToPiece} objectid={this.props.objectid}>
                        <img style={{cursor: 'pointer'}} className="piece-image" src={this.props.primary_image_small} alt={this.props.title}></img>
                        <p className="piece-title">{this.props.title}</p>
                        <p className="piece-artist">{this.props.artist_display_name}</p>
                        <p className="piece-date">{this.props.object_end_date}</p>
            </div> 
                )
    }
}



export default Piece;