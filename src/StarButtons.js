import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const StarButton = props => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    createStars();
  }, []);

  const Star = styled.img`
    width: 50px;
    height: 50px;
    margin: 5px;
    cursor: pointer;
  `;

  const handleClick = numberOfStarsString => {
    let numberOfStars = Number(numberOfStarsString) + 1;
    let starsToFill = 5 - numberOfStars;
    console.log(starsToFill);
    let newStars = [...stars];
    for (var i = 0; i < numberOfStars; i++) {
      newStars.splice(
        i,
        1,
        <Star
          onClick={handleClick}
          key={i}
          src={process.env.PUBLIC_URL + "/img/star_fill.png"}
        ></Star>
      );
    }
    for (let j = 0; j < starsToFill; j++) {
      newStars.push(
        <Star
          onClick={handleClick}
          key={j + 12}
          src={process.env.PUBLIC_URL + "/img/star_blank.png"}
        ></Star>
      );
    }

    setStars(newStars);
  };

  const createStars = () => {
    const stars = [];
    for (var i = 0; i < 5; i++) {
      stars.push(
        <Star
          id={i}
          onClick={e => handleClick(e.target.id)}
          key={i}
          src={process.env.PUBLIC_URL + "/img/star_blank.png"}
        ></Star>
      );
    }
    setStars(stars);
  };

  return <div> {stars}</div>;
};

export default StarButton;
