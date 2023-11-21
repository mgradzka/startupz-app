import React, { forwardRef } from "react";
import WorkCard from "./WorkCard";
import project1 from "../../assets/work1.png";

function OurWorks({}, ref) {
  const projects = [
    {
      title: "Tolq",
      description:
        "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
      image: "https://i.postimg.cc/xTrL8TNL/work1.png",
      link: "project1",
      color: "green",
    },
    {
      title: "Feedback Labs",
      description:
        "Feedback Labs turns feedback into actionable insights for your team.",
      image: "https://i.postimg.cc/4NzV9kpq/work2.png",
      link: "project2",
      color: "lightblue",
    },
    {
      title: "Codekeeper",
      description:
        "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
      image: "https://i.postimg.cc/Bn4D5Yg6/work3.png",
      link: "project3",
      color: "blue",
    },
    {
      title: "LegalSite",
      description:
        "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
      image: "https://i.postimg.cc/c1tQd8Cs/work4.png",
      link: "project4",
      color: "purple",
    },
  ];

  const projectCards = projects.map((card) => {
    return (
      <WorkCard
        title={card.title}
        description={card.description}
        key={card.title}
        link={card.link}
        image={card.image}
        color={card.color}
      />
    );
  });

  return (
    <section ref={ref} className="container-fluid py-5">
      <div className="container pt-5 text-center">
        <h2 className="display-6 mb-4">Our works</h2>
        <div className="row justify-content-center">{projectCards}</div>
      </div>

      <div className=" d-flex align-items-center py-5 justify-content-center gap-4">
        <img src="https://i.postimg.cc/DyCqPVCz/Thum1.png" alt="thumb" />
        <h3 className="text-center align-self-end w-50 py-4">
          Startups create a world that actually is better. Any problem that can
          be solved, will be solved by a startup, and that is a huge
          opportunity.
        </h3>
        <img src="https://i.postimg.cc/VLNt6GYP/Thumb2.png" alt="thumb" />
      </div>
    </section>
  );
}

export default forwardRef(OurWorks);
