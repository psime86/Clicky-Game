import React from 'react';
import './style.css';

function CharacterCard(props){
  return (
    <div className='card col-md-3' onClick={() => props.clicked(props.id)}>
      <div className='img-container'>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;