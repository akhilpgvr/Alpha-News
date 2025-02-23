import logo from '../assets/Billion_Errors_Logo.png'

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow-sm py-3">
      <div className="container">
      <img src={logo} style={{height: "60px", width: "60px", borderRadius: "50%", objectFit: "cover"}} className="card-img-top" alt="logo"/>
        <a className="navbar-brand text-white fs-3 fw-bold" href="#">
          Alpha<span className="text-danger">News</span>
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
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4">
            {["Business", "Technology", "Science", "Health", "Sports", "Entertainment"].map((category) => (
              <li className="nav-item" key={category}>
                <div
                  className="nav-link text-white text-uppercase fw-medium"
                  onClick={() => setCategory(category.toLowerCase())}
                  style={{
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderBottom: "2px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.borderColor = "red")}
                  onMouseLeave={(e) => (e.target.style.borderColor = "transparent")}
                >
                  {category}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
