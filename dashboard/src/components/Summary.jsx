const Summary = ({user, holdingSize, totalPnL, pnlPercentage, pnlClass, currentValue, totalInvestment}) => {
  return (
    <>
      <div className="username">
        <h6>Hi, {user?.username} !</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdingSize})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnlClass}>
              {totalPnL.toFixed(2)} <small>{pnlPercentage.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
               <span>Current value: {currentValue.toFixed(2)}</span>{" "}
            </p>
            <p>
               <span>Total investment: {totalInvestment.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
