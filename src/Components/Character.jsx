import React from 'react';

const Character = ({character}) => {

    const { name, image, origin, status } = character;
    return ( 
        <div className='card'>
            <img src={image} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{origin.name}</p>
                <p className={
                    (status=='Alive')? "live" : (status=='unknown')? "unknow": "dead"
                }>{status}</p>
            </div>
            
        </div>
    );
}
 
export default Character;