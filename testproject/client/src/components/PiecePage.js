import React from 'react';
import NavBar from './NavBar';

// class PiecePage extends React.Component {
//     getObjectId = () => {
//         console.log('getting object id');
//     }

    
//     render() {
//         return (
//             <div className="piecepage">
//                 <NavBar />
//                 <h1>We went to the piece page</h1>
//             </div>
//         );
//     }
// }

function PiecePage(props) {
        let LSpropsObject;
        let objectid = props.match.params.objectid;

        const getObjectId = () => {
            console.log('getting object id');
            console.log(objectid);
        }
        getObjectId();

        const restoreFromLocalStorage = () => {
            LSpropsObject = JSON.parse(localStorage.getItem(`piece${objectid}`));
            console.log(LSpropsObject);
        }

        restoreFromLocalStorage();

        console.log(LSpropsObject.object_end_date);
    return (
        <div className="piecepage">
                <NavBar />
                    <img className="piece-page-image" style={{width: '1000px'}} src={LSpropsObject.primary_image} alt={LSpropsObject.title}></img>

                    <p className="piece-page-title">Title: {LSpropsObject.title}</p>

                    {LSpropsObject.artist_display_name ?
                    <p className="piece-page-artist">Artist: {LSpropsObject.artist_display_name}</p> :
                    ''
                    }

                    {LSpropsObject.artist_nationality ?
                        <p className="piece-page-artist-nationality">Artist Nationality: {LSpropsObject.artist_nationality}</p> :
                        ''
                        }

                    {(!LSpropsObject.artist_nationality && LSpropsObject.culture) ? 
                        <p className="piece-page-culture">Culture: {LSpropsObject.culture}</p> :
                        ''
                    }

                    {(!LSpropsObject.artist_nationality && !LSpropsObject.culture && LSpropsObject.country) ?
                        <p className="piece-page-country">Country: {LSpropsObject.country}</p> :
                        ''

                    }

                    {LSpropsObject.city ? 
                    <p>City: {LSpropsObject.city}</p> :
                    ''
                    }


                    <p className="piece-page-date">Date created: {LSpropsObject.object_end_date}</p>


                    <p className="piece-page-medium">Medium: {LSpropsObject.medium}</p>
    
                    

        </div>
    )
}


export default PiecePage;