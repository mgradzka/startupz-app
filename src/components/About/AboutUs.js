import React from "react";
import AboutCard from "./AboutCard";
import question from '../../assets/question.png'

function AboutUs() {
  const dataAbout = [
    {
      title: "01",
      description: "We develop innovative products, systems and services",
    },
    {
      title: "02",
      description: "Next we build teams to scale them into companies",
    },
    {
      title: "03",
      description: "Each startup solving one problem at a time",
    },
  ];

  const aboutCards = dataAbout.map((card) => {
    return <AboutCard title={card.title} description={card.description} key={card.title} />;
  });
  return (
    <section className="container-fluid py-5 about">
      <div className="container pt-5 ">
        <div className="d-flex justify-content-between">


        <h2 className="display-6 my-4 ">Who we are</h2>
        <img src={question} alt="" />
        </div>
        <h5 className="mb-4">
          We create products that have innovation and technology at their core.{" "}
          <br />
          We value working with talented people that understand the
          possibilities of today.
        </h5>
        <div className="d-flex flex-column flex-lg-row  gap-5 pt-4">{aboutCards}</div>
      </div>
    </section>
  );
}

export default AboutUs;
