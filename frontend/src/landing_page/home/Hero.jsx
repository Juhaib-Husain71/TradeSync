
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div>
          <img src="/images/landing.svg" alt="Hero Image" className="mb-5" style={{width: "80%"}}></img>
        </div>
        <h1 className="fs-2">Invest in everything</h1>
        <p className="fs-5 text-muted">Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="mt-3 p-2 btn btn-primary fs-5" style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero
