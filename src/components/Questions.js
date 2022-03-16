import React, { useState } from 'react';
import DifficultyStars from './DifficultyStars';
import fetchQuestions from './../questions.json';
import { Heading, Container } from './../styles';
import ProgressBar from './ProgressBar';
import ProgressResult from './ProgressResult';
import styled from 'styled-components';

const QuizData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
`;

const Question = styled.div`
  list-style: none;
`;
const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 50%;
  flex-wrap: wrap;
  gap: 15px;
`;
const Button = styled.button`
  width: 40%;
  padding: 5px;
  background-color: grey;
  color: white;
`;
const NextQuesButton = styled.button`
  padding: 12px;
  margin: 30px;
  background-color: white;
  border: '4px solid black';
  border-radius: 10px;
`;

function Questions() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [maximumScore, setMaximumScore] = useState(100);
  const [showScore, setShowScore] = useState(false);
  const [message, setMessage] = useState('');
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  function decodeQueryParam(p) {
    return decodeURIComponent(p.replace(/\+/g, ' '));
  }

  const decodedQuestion = decodeQueryParam(fetchQuestions[index].question);
  if (fetchQuestions > 20) {
    return showScore(true);
  }

  const nextQuestionButton = () => {
    if (message) {
      setIndex(index + 1);
      setMessage('');
    }
  };

  const correctAnswers = fetchQuestions[index].correct_answer;

  const getOptions = [
    ...fetchQuestions[index].incorrect_answers,
    correctAnswers,
  ];

  function getShuffledArr(arr) {
    return [...arr].map((_, i, arrCopy) => {
      var rand = i + Math.floor(Math.random() * (arrCopy.length - i));
      [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
      return arrCopy[i];
    });
  }

  const options = getOptions.map((q) => decodeQueryParam(q)).sort();

  const shuffledOptions = getShuffledArr(options);

  const handleClick = (answer) => {
    let msg = 'Your Answer Is Correct'
    if (decodeQueryParam(fetchQuestions[index].correct_answer) === answer) {
      setScore(score + 1);
      setAnsweredCorrectly(true);
    } else {
      msg = 'Your Answer Is Wrong'
      setAnsweredCorrectly(false);
      setShowScore(false);
    }
    setMessage(msg);
  };
  const maxScore = (answer) => {
    if (fetchQuestions[index].correct_answer === answer) {
      return Math.floor((answer / fetchQuestions) * 100);
    }
  };
  return (
    <Container>
      <ProgressBar
        index={index}
        questions={fetchQuestions}
      
      />
      {showScore === true ? (
        <Heading>
          You scored {score} out of {fetchQuestions.length}
        </Heading>
      ) : (
        <Container>
          <Heading>
            <span>Question {index + 1} </span> /{fetchQuestions.length}
          </Heading>
          <Heading>{decodeQueryParam(fetchQuestions[index].category)} </Heading>
          <DifficultyStars rating={fetchQuestions} index={index} />

          <QuizData>
            <Question> {decodedQuestion}</Question>
            <OptionsContainer>
              {shuffledOptions.map((opt) => {
                return <Button onClick={() => handleClick(opt)}>{opt}</Button>;
              })}
            </OptionsContainer>
          </QuizData>

          {showScore === false ? (
            <>
              <h1>{message}</h1>

              <NextQuesButton onClick={nextQuestionButton}>
                Next Question
              </NextQuesButton>
            </>
          ) : null}
        </Container>
      )}
      <div style={{ marginTop: '5%' }}>
        <ProgressResult
          score={score}
          index={index}
          maxScore={maxScore}
          questions={fetchQuestions}
        />
      </div>
    </Container>
  );
}

export default Questions;
