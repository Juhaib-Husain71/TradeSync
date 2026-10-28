import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = ({user}) => {

    const [allHoldings, setAllHoldings] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:3001/holdings", {
          withCredentials: true,
        }
      ).then((res) => {
        setAllHoldings(res.data);
      });
    }, []);

    const totalInvestment = allHoldings.reduce(
      (sum, stock) => sum + stock.qty * stock.avg, 0
    );

    const currentValue = allHoldings.reduce(
      (sum, stock) => sum + stock.qty * stock.price, 0
    );
    const totalPnL = currentValue - totalInvestment;
    const pnlPercentage = (totalPnL / totalInvestment) * 100;
    const pnlClass = totalPnL > 0 ? "pnlProfit" : "pnlLoss";
    const holdingSize= allHoldings.length;

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary user={user} holdingSize={holdingSize} totalPnL={totalPnL} pnlPercentage={pnlPercentage} currentValue={currentValue} totalInvestment={totalInvestment} pnlClass={pnlClass} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings allHoldings={allHoldings} totalInvestment={totalInvestment} currentValue={currentValue} totalPnL={totalPnL} pnlPercentage={pnlPercentage} pnlClass={pnlClass} />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
