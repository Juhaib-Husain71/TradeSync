
function InvestmentOptions() {
  return (
    <div className="container mt-5 mb-5">
        <h3 className="text-muted text-center mb-5 pt-5">Investment options with TradeSync demat account</h3>
        <div className="row mt-3">
            <div className="col-6 d-flex justify-content-end pe-5">
                <img src="/images/stocks-acop.svg" alt="stocks-acop Img" style={{width: "22%", height: "70%"}}/>
                <div className="">
                    <h5>Stocks</h5>
                    <p>Invest in all exchange-listed<br></br>securities</p>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-start ps-5">
                <img src="/images/mf-acop.svg" alt="stocks-acop Img" style={{width: "22%", height: "70%"}}/>
                <div className="">
                    <h5>Mutual Funds</h5>
                    <p>Invest in commission-free direct<br></br>mutual funds</p>
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-6 d-flex justify-content-end pe-5">
                <img src="/images/ipo-acop.svg" alt="stocks-acop Img" style={{width: "22%", height: "70%"}}/>
                <div className="">
                    <h5>IPO</h5>
                    <p>Apply to the latest IPOs instantly<br></br>via UPI</p>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-start ps-5">
                <img src="/images/fo-acop.svg" alt="stocks-acop Img" style={{width: "22%", height: "70%"}}/>
                <div className="">
                    <h5>Future & Options</h5>
                    <p>Hedge and mitigate market risk<br></br>through simplified F&O trading</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvestmentOptions;
