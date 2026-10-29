function Team() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="fs-3 text-center">People</h1>

      <div className="row">
        <div className="col ms-5 text-center">
          <img src="/images/nithinKamath.jpg" alt="nithin kamath Image" className="ms-5" style={{borderRadius: "100%", width: "55%"}}/>
          <div className="mt-3 ps-5 text-muted">
            <p className="fs-5">Project by Juhaib</p>
            <p>Full-stack MERN Dev.</p>
          </div>
          
        </div>
        <div className="col pe-5 pt-5 text-muted" style={{fontSize: "1.1rem"}}>
          <p>Nithin bootstrapped and founded TradeSync in 2026 to overcome the hurdles he faced during his decade long stint as a trader. Today, TradeSync has changed the landscape of the Indian broking industry.</p>

          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
  )
}

export default Team
