const Header = ({ setSelectedTab }) => {
  return (
    <header style={{ backgroundColor: "#C0C0C0", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
      <div className="container py-3">
        <div className="d-flex flex-wrap align-items-center justify-content-between">

          {/* Logo + Brand */}
          <div className="d-flex align-items-center">
            <a href="#" className="me-3">
              <img
                src="praga-lady .jpg"
                style={{ height: "60px", width: "60px", borderRadius: "50%", objectFit: "cover" }}
                alt="Logo"
              />
            </a>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: "600",
                fontSize: "2rem",
                margin: 0,
                color: "#222"
              }}
            >
              The <span style={{ color: "#ff69b4" }}>MOMent</span> Care
            </h1>
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex gap-3 flex-wrap justify-content-center mt-3 mt-md-0">
            <button
              type="button"
              className="btn btn-outline-dark fw-semibold"
              onClick={() => setSelectedTab("Rate Us")}
            >
              Rate Us
            </button>
            <button
              type="button"
              className="btn btn-outline-dark fw-semibold"
              onClick={() => setSelectedTab("FAQs")}
            >
              FAQs
            </button>
            <button
              type="button"
              className="btn btn-outline-dark fw-semibold"
              onClick={() => setSelectedTab("About Us")}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
