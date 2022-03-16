import React from 'react';

function ProgressBar({ index, questions }) {
  const currentQuestion = questions.length - 1;

  const bar = Math.floor((index / currentQuestion) * 100);

  const Container = {
    height: '15px',
    width: '98%',
    backgroundColor: 'lightblue',
  };

  const Progress = {
    height: '100%',
    width: `${bar}%`,
    backgroundColor: 'gray',
    textAlign: 'right',
  };

  return (
    <div>
      <div style={Container}>
        <div style={Progress}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
