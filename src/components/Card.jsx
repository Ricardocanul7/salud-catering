import React from 'react'

export const Card = ({ src="img/1.jpg", alt, title = "titulo", content = "contenido", link = "#"}) => {
    return (
        <div className="home_card my-2">
            <img src={src} alt={alt} className="img-fluid rounded"/>
            <div className="text-left">
                <h4 className="pt-4 pb-2">{title}</h4>
                <p className="pb-2">{content}</p>
            </div>
            <a href={link} className="btn btn-outline-secondary">
                Leer más
            </a>
        </div>
    )
}
