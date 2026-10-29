import CurrPrice from "./CurrPrice"
function Hero() {
  return (
    <div className="container mt-5">
      <div className="row text-center pt-5">
        <h3>Charges</h3>
        <h4 className="fs-5 text-muted">List of all charges and taxes</h4>
      </div>

      <div className="row mt-5">
        <div className="col-4">
          <CurrPrice imageUrl="/images/pricing-eq.svg" priceTitle="Free equity delivery" priceDescription="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage." />
        </div>
        <div className="col-4">
          <CurrPrice imageUrl="/images/other-trades.svg" priceTitle="Intraday and F&O trades" priceDescription="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."/>
        </div>
        <div className="col-4">
          <CurrPrice imageUrl="/images/pricing-eq.svg" priceTitle="Free direct MF" priceDescription="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges." />
        </div>
      </div>
    </div>
  )
}

export default Hero
