function Hero() {
  return (
    <div style={{ backgroundColor: "#F6F6F6" }}>
      <div className="container pb-3 ps-5 pe-5">
        <div className="d-flex justify-content-between">
          <h1 className="mt-5 text-muted">Support Portal</h1>
          <button
            className="btn btn-primary fs-6 mt-5"
            style={{ height: "95%" }}
          >
            My tickets
          </button>
        </div>
        <div className="input-group mb-5 mt-4" style={{height: "3.8rem"}}>
          <span className="input-group-text" id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Eg: How do I open my  account, How do i activate F&O..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
