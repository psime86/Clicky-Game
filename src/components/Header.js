import React from 'react';

function Scoreboard(props){
  return (
    <div className='bg-primary p-4 sticky-top'>
      <div className='row'>
        <div className='col-sm text-center text-white'>
          <h2 className='font-weight-bold text-white'>{props.title}</h2>
        </div>
        <div className='col-sm text-center text-white bg-warning rounded-pill'>
          <h2 className='font-weight-bold'>{props.direction}</h2>
        </div>
        <div className='col-sm text-center text-white'>
          <h2 className='font-weight-bold'>
            Score:{props.score} | Top Score:{props.topScore}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;