import React from 'react';
import NavBar from './NavBar';


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

        let additionalImageArray = LSpropsObject.additional_images;

        
    return (
        <div className="piecepage">
                <NavBar />

                <div className="piece-page-content">


                <div className="piece-page-basic-info">
                        
                        <div className="piece-page-text">

                            <p className="piece-page-title">{LSpropsObject.title}</p>
                            <p className="piece-page-date">{LSpropsObject.object_end_date}</p>

                            {LSpropsObject.artist_display_name ?
                            <p className="piece-page-artist">{LSpropsObject.artist_display_name}</p> :
                            ''
                            }

                            <p className="piece-page-geography">
                                {LSpropsObject.artist_nationality || LSpropsObject.culture || LSpropsObject.country}
                                {LSpropsObject.city && LSpropsObject.city !== LSpropsObject.culture ?
                                <span>, {LSpropsObject.city}</span> :
                                ''}
                            </p>

                        



                            <p className="piece-page-medium">{LSpropsObject.medium}</p>
                            <p className="piece-page-department">{LSpropsObject.department} Department</p>
                            </div>

                
                </div>   

                <div className="piece-page-images-section">
                    <div className="piece-page-main-image-section">
                        <img className="piece-page-main-image" src={LSpropsObject.primary_image} alt={LSpropsObject.title}></img>
                        <br></br>
                        <div className="see-full-piece"><a href={LSpropsObject.primary_image} target="_blank" rel='noopener noreferrer'>See full piece</a></div>
                    </div>
                    

                    {/* {LSpropsObject.additional_images.length ?
                    <div className="piece-page-additional-image-section">
                        {additionalImageArray.map((image) => <img className="piece-page-additional-image" style={{width: '100px'}} src={image} alt={LSpropsObject.title}></img>)}
                    </div>
                        :
                        ''
                        } */}
                </div>
        

                </div>         

        </div>
    )
}


export default PiecePage;