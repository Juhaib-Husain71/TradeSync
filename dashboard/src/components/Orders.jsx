import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/orders`, {
        withCredentials: true,
    }).then((res)=>{
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          </thead>

          <tbody >
          {allOrders.map((stock, index) => {
            // const currVal = stock.price * stock.qty;
            // const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const modeClass = stock.mode === "BUY" ? "profit" : "loss";

            return(
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td className={modeClass}>{stock.mode}</td>
                </tr>
            )
          })}
          </tbody> 
        </table>
      </div>
    </>
  );
};

export default Orders;
