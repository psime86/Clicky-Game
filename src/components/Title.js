import React from 'react';

function Title(props){
  return (
    <div>
      <div className='jumbotron jumbotron-fluid bg-secondary'>
        <div className='container'>
          <h1 className='display-3 font-weight-bold text-center text-white'>
            {props.title}
          </h1>
          <p className='lead text-center'>
            <h5 className='text-white'>
              Click on a character to earn points, but be careful. Don't click on the same character twice!
            </h5>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Title;