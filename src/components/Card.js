import React from 'react'

const Card = ({name, email, id}) => {
    var html =
        <div className='bg-light-green dib br3 ma2 grow bw2 shadow-2 tc'>
            <img src={`https://robohash.org/${id}?200x200`} alt="Robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>;
    return html;
}

export default Card;