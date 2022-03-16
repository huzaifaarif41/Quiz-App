import ReactStars from 'react-stars';
import React, { useEffect, useState } from 'react';
import Categories from './../questions.json';

const DifficultyStars = ({ index }) => {
  const [rating, setRating] = useState(0);

  const checkRating = () => {
    console.log(Categories[index].difficulty);
    if (Categories[index].difficulty === 'easy') {
      setRating(1);
    } else if (Categories[index].difficulty === 'medium') {
      setRating(2);
    } else if (Categories[index].difficulty === 'hard') {
      setRating(3);
    }
  };

  useEffect(() => {
    checkRating();
  });

  return <ReactStars count={3} size={40} value={rating} color2={'#ffd700'} />;
};

export default DifficultyStars;
