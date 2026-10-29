function Pricing() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-3 text-muted">Unbeatable pricing</h1>
          <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="#" style={{textDecoration: "none"}}>See Pricing  <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className="col-8">
          <div className="row mt-3">
            <div className="col d-flex">
              <img src="/images/pricing-eq.svg" alt="pricing Image1" style={{width: "45%"}}/>
              <p className="small mt-5">Free account opening</p>
            </div>
            <div className="col d-flex">
              <img src="/images/pricing-eq.svg" alt="pricing Image2" style={{width: "45%"}}/>
              <p className="small mt-5">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col d-flex">
              <img src="/images/other-trades.svg" alt="pricing Image3" style={{width: "45%"}}/>
              <p className="small mt-5">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
