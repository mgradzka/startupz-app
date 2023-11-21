import React from "react";

function Hiring() {
  const seeOpenings = () =>{
    // go to a career page
  }

  return (
    <section className="d-flex align-items-center justify-content-between about">
      <img  src="https://i.postimg.cc/fWY6qCXX/Frame-4.png" className="my-4 d-lg-block d-none" alt="see openings"/>
      <div className="justify-items-center text-center ">
        <h2 className="display-6 mb-4">We are hiring!</h2>
        
        <h5 className="m-2 m-lg-4">
          We're always looking for talented people<br />  to join and help build our
          startups.<br /> Check out our current openings
        </h5>
        <a
          onClick={seeOpenings}
          className="btn btn-primary rounded-pill m-4"
          href="openings"
          role="button"
        >
          See current openings
        </a>
      </div>
      <img  src="https://i.postimg.cc/Vvz4VqQB/Frame-5.png" className="my-4  d-lg-block d-none"  alt="see openings"/>
    </section>
  );
}

export default Hiring;
