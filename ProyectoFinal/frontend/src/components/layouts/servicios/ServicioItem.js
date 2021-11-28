import React from 'react'

export const ServicioItem = (props) => {

    const {title, description, icon} = props;
    
    return (
        <div className="col-md-6" >
            <i className={icon}></i>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
};
