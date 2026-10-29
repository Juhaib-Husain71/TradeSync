
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 text-center">
          <img src="/images/largestBroker.svg" alt="Largest Broker Image" className="w-75"/>
        </div>

        <div className="col-6 p-5 mt-5">
          <h1 className="fs-2">Largest stock broker in India</h1>
          <p>2+ million TradeSync clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
          
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="/images/pressLogos.png" alt="PressLosos Image" style={{width: "90%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Awards
