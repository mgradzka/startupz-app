import React from "react";
import AboutCard from "./AboutCard";
import ideas from "../../assets/ideas.png";

function CoreValues() {
  const dataValues = [
    {
      title: "01. Innovation",
      description:
        "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
    },
    {
      title: "02. People",
      description: "Talent is what enable us to create great companies",
    },
  ];

  const valuesCards = dataValues.map((card) => {
    return (
      <AboutCard
        title={card.title}
        description={card.description}
        key={card.title}
      />
    );
  });
  return (
    <section className="container-fluid py-5 about">
      <div className="container pt-5 ">
        <div className="d-flex justify-content-between">
          <h2 className="display-6 my-4 ">Our core values</h2>
          <img src={ideas} alt="" />
        </div>
        <div className="d-flex flex-column flex-lg-row gap-5 pt-4 w-75"> {valuesCards}</div>
      </div>
    </section>
  );
}

export default CoreValues;
