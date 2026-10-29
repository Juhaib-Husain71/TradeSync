function Brokerage() {
  return (
    <div className="container mt-5">
      <h2 className="p-3">Equity</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Equity delivery</th>
            <th scope="col">	Equity intraday</th>
            <th scope="col">F&O - Futures</th>
            <th scope="col">F&O - Options</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Brokerage</th>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
       
          </tr>
          <tr>
            <th scope="row">STT/CTT</th>
            <td>0.1% on buy & sell</td>
            <td>0.025% on the sell side</td>
            <td>0.05% on the sell side</td>
            <td>
              <ul>
                <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                <li>0.15% on sell side (on premium)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Transaction charges</th>
            <td>NSE: 0.00307% <br/> BSE: 0.00375%</td>
            <td>NSE: 0.00307% <br/> BSE: 0.00375%</td>
            <td>NSE: 0.00183% <br/> BSE: 0</td>
            <td>NSE: 0.03553% (on premium) <br/> BSE: 0.0325% (on premium)</td>
          </tr>
          <tr>
            <th scope="row">GST</th>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <th scope="row">SEBI charges</th>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <th scope="row">Stamp charges</th>
            <td>0.015% or ₹1500 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>          
        </tbody>
      </table>

      <h5 className="text-center mt-3"><a href="">Calculate your costs upfront</a> using our brokerage calculator</h5>
    </div>
  );
}

export default Brokerage;
