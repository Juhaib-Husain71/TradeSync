function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center pt-5">
        <h2>The TradeSync Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

        <div className="col-4 mt-5">
          <img src="/images/zerodhaFundhouse.png" alt="TradeSync Fund house Image" style={{width: "50%"}}/>
          <p className="p-3 text-muted" style={{fontSize:"0.9rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 mt-5">
          <img src="/images/sensibullLogo.svg" alt="sensibull Image" style={{width: "50%"}}/>
          <p className="p-3 text-muted" style={{fontSize:"0.9rem"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 mt-5">
          <img src="/images/tijori.svg" alt="tigori Image" style={{width: "40%"}}/>
          <p className="p-3 text-muted" style={{fontSize:"0.9rem"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
        </div>

        <div className="col-4 mt-5">
          <img src="/images/streakLogo.png" alt="streak Image" style={{width: "45%"}}/>
          <p className="p-3 text-muted" style={{fontSize:"0.9rem"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className="col-4 mt-5">
          <img src="/images/smallcaseLogo.png" alt="small case Image" style={{width: "50%"}}/>
          <p className="p-3 text-muted" style={{fontSize:"0.9rem"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 mt-5">
          <img src="/images/dittoLogo.png" alt="ditto Image" style={{width: "35%"}}/>
          <p className="p-3 text-muted" style={{fontSize:"0.9rem"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>

        <button className="mt-5 mb-5 p-2 btn btn-primary fs-5" style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>

      </div>
    </div>
  )
}

export default Universe
