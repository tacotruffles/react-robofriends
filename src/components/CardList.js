import Card from "./Card";
import React from "react";

const CardList = ({ robots }) => {
  const robotCards = robots.map(robot => {
    return <Card key={robot.id} {...robot} />;
  });

  return <div>{robotCards}</div>;
};

export default CardList;
