import React from "react";

function WorkCard({ title, link, image, description, color }) {

const seeWorkPage = (link) => {
 // redirecting to a specific project page
}

  return (
    <div className="card work-card shadow border-0 p-4 rounded col-12 col-lg-5 m-2 align-items-center gap-2">
      <h4 className={color}>{title}</h4>
      <p>{description}</p>
      <img src={image} className="img-fluid"  />
      <button type="button" className="btn button2 rounded-pill">
        <a href={link} onClick={seeWorkPage}>More</a>
      </button> 
    </div>
  );
}

export default WorkCard;
