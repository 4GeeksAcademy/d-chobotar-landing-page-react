import React from "react";
import Card from "./Card";

function CardsLayout() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row row-cols-1 row-cols-md-4">
        <Card displayText="some card 1" cardTitle="Title 1" />
        <Card displayText="some card 2" cardTitle="Title 2" />
        <Card displayText="some card 3" cardTitle="Title 3" />
        <Card displayText="some card 4" cardTitle="Title 4" />
      </div>
    </div>
  );
}

export default CardsLayout;
