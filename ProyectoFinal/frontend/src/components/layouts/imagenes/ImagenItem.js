import React from 'react';

export const ImagenItem = (props) => {

    const {description, image_id }= props;
    
    return (
        <div class="col-md-6" >
            <img src={`http://res.cloudinary.com/jvrelopez/image/upload/${image_id}`} class="d-block w-100" alt={description}></img>
            <p>{description} </p>
        </div>

    )
};
