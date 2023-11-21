import StartupzSvg from "./StartupzSvg";

function Navbar() {
  const seeOpenings = () => {
    // go to a career page
  }
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="home">
          <StartupzSvg />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex flex-column align-items-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-baseline gap-4">
            <li className="nav-item">
              <a className="nav-link" href="startups">
                Startups
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true" href="work">
              <button type="button" className="btn button2 rounded-pill" onClick={seeOpenings}>
                  Work with us!
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
