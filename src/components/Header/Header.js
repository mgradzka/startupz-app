import headerImg from "../../assets/header.png";

function Header({onClick}) {


  return (
    <header className="d-flex  mt-2 container-fluid">
      <div className="align-self-center mb-2 container">
        <h1 className="display-1 w-50">We Create Startups.</h1>
        <h5 className=" mb-4">
          We are startup studio that develops and launches new companies.
        </h5>
        <button
          type="button"
          className="btn btn-primary rounded-pill"
          onClick={onClick}
        >
          See our works
        </button>
      </div>
      <img src={headerImg} className="img-fluid header-img d-lg-block d-none" alt="header" />
    </header>
  );
}

export default Header;
