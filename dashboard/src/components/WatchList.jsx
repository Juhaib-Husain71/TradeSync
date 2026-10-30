import { useState, useContext, useEffect } from "react";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";

import { Tooltip, Grow } from "@mui/material";
import GeneralContext from "./GeneralContext.jsx";
import { DoughnoutChart } from "./DoughnoutChart.jsx";
import axios from "axios";

const WatchList = () => {
  const [allWatchlists, setAllWatchlists] = useState([]);
  useEffect(()=>{
    axios.get("https://tradesync-ikxa.onrender.com/watchlists", {
      withCredentials: true,
    }).then((res)=>{
      setAllWatchlists(res.data);
    })
  }, []);

  const labels = allWatchlists.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
    {
      label: 'Price',
      data: allWatchlists.map((stock) => stock.price),
      backgroundColor: [
        
        "rgba(59, 130, 246, 0.5)",
        "rgba(16, 185, 129, 0.5)",
        "rgba(245, 158, 11, 0.5)",
        "rgba(239, 68, 68, 0.5)", 
        "rgba(139, 92, 246, 0.5)",
        "rgba(236, 72, 153, 0.5)",
        "rgba(6, 182, 212, 0.5)", 
        "rgba(132, 204, 22, 0.5)",
        "rgba(249, 115, 22, 0.5)",
        "rgba(99, 102, 241, 0.5)" 

      ],
      borderColor: [
        "rgba(59, 130, 246, 1)",
        "rgba(16, 185, 129, 1)",
        "rgba(245, 158, 11, 1)",
        "rgba(239, 68, 68, 1)", 
        "rgba(139, 92, 246, 1)",
        "rgba(236, 72, 153, 1)",
        "rgba(6, 182, 212, 1)", 
        "rgba(132, 204, 22, 1)",
        "rgba(249, 115, 22, 1)",
        "rgba(99, 102, 241, 1)" 
      ],
      borderWidth: 1,
    },
  ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {allWatchlists.length} / 50</span>
      </div>

      <ul className="list">
        {allWatchlists.map((stock, index) => {
          return(
            <WatchListItem stock={stock} key={index} keyid={index}/>
          )
        })}
      </ul>

      <DoughnoutChart data={data}/>
    </div>
  );
};

export default WatchList;


const WatchListItem = ({stock, keyid}) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={keyid}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="items-ali">
          <div className="percent">{stock.percent}</div>
          <div className="arr-spc">{stock.isDown ? (<KeyboardArrowDown className="down"/>) : (<KeyboardArrowUp className="up"/>)}</div>
          <div className="price">{stock.price}</div>
        </div>
      </div>

      {showWatchListActions && <WatchListActions uid={stock.name}/>}
    </li>
  )
};

const WatchListActions = ({uid}) => {
  const generalContext = useContext(GeneralContext);
  
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return(
    <span className="actions">
      <span className="action-items">
        <Tooltip title="Buy (B)" placement="top" arrow slots={{ transition: Grow }} onClick={handleBuyClick}>
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip title="Sell (C)" placement="top" arrow slots={{ transition: Grow }}>
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip title="Analytics (A)" placement="top" arrow slots={{ transition: Grow }}>
          <button className="action">
            <BarChartOutlined className="icon"/>
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow slots={{ transition: Grow }}>
          <button className="action">
            <MoreHoriz className="icon"/>
          </button>
        </Tooltip>
      </span>
    </span>
  )
}