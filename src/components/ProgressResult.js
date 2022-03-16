import React, { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function ProgressResult({ questions, index, score, maxScore }) {
  const question = questions.length - 1;

  const currScore = Math.floor((score / question) * 100);
  // const maxxScore= Math.floor((maxScore/question) *100)
  const currentBarProgress = Math.floor((index / question) * 100);

  // const currentMaxScore = () => {

  //   if (index/question) {
  //     setIncorrectAnswer(true)
  //     setMaximumScore(maximumScore-5)
  //   }
  // };

  // const Container = {
  //   height: '50px',
  //   width: '100%',
  //   backgroundColor: 'lightblue',
  //   margin: 12,
  //   border: '2px solid black',
  // };

  // const currentBar = {
  //   height: 50,
  //   width: `${currentBarProgress}%`,
  //   backgroundColor: 'gray',
  //   textAlign: 'left',
  // };
  // const maxBar = {
  //   width: `${maxScore}%`,
  //   backgroundColor: 'black',
  //   textAlign: 'right',
  // };
  // const minBar = {
  //   width: `${minScore}`,
  //   backgroundColor: 'green',
  //   float: 'right',
  // };

  const currentScore = {
    padding: 10,
    color: 'black',
    float: 'Left',
  };
  const maxScoreText = {
    padding: 10,
    color: 'black',
    float: 'Right',
  };

  return (
    <div>
      <span style={currentScore}> SCORE: {currScore}%</span>
      <span style={maxScoreText}>MAX SCORE: {maxScore()}%</span>
      <br />
      {/* <div style={Container}>

        <div style={maxBar}>
          <div style={currentBar}></div>
        </div> */}
      {/* <ProgressBar>
  <ProgressBar variant="info"  now={currentBarProgress} key={1} Information />
  <ProgressBar variant="success" now={maxxScore} key={2} Success />
  {/* <ProgressBar  now={10} key={3} /> */}
      <ProgressBar>
        <ProgressBar
          striped
          variant='success'
          now={currentBarProgress}
          key={1}
        />
        <ProgressBar variant='warning' now={maxScore()} key={2} />
        <ProgressBar striped variant='danger' now={10} key={3} />
      </ProgressBar>
      {/* </div> */}
    </div>
  );
}
export default ProgressResult;
