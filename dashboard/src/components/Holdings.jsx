import { VerticalGraph } from "./VerticalGraph";

const Holdings = ({allHoldings, totalInvestment, currentValue, totalPnL, pnlPercentage, pnlClass}) => {

  const labels = allHoldings.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets:[
      {
        label: 'Stock Price',
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: 'rgba(59, 34, 138, 0.75)',
      },
    ],
  }
 
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          </thead>

          <tbody >
          {allHoldings.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return(
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
            )
          })}
          </tbody> 
        </table>
      </div>

      <div className="row">
        <div className="col">
          <span style={{fontSize: "1.75rem"}}>
            {totalInvestment.toFixed(2)}
          </span>
          <p style={{fontSize: "1rem"}}>Total investment</p>
        </div>
        <div className="col">
            <span style={{fontSize: "1.75rem"}}>
            {currentValue.toFixed(2)}
            </span>
          <p style={{fontSize: "1rem"}}>Current value</p>
        </div>
        <div className="col">
          <span className={pnlClass} style={{fontSize: "1.75rem"}}>
          {totalPnL.toFixed(2)} ({pnlPercentage.toFixed(2)}%)
          </span>
          <p style={{fontSize: "1rem"}}>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;
