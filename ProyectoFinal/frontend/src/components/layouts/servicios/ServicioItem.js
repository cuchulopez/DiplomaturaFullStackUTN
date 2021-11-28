import React from 'react'

export const ServicioItem = (props) => {

    const {title, description, icon} = props;
    
    return (
        <div class="col-md-6" >
            <i class={icon}></i>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
};
