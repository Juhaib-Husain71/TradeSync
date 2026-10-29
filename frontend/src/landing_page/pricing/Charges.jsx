function Charges() {
  return (
    <div className="container mt-5">
      <h4 className="pt-5">Charges explained</h4>
      <div className="row mt-3">
        <div className="col ps-5 text-muted">
          <h6>Securities/Commodities transaction tax</h6>

          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>

          <p>
            When trading at TradeSync, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h6>Transaction/Turnover Charges</h6>

          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>

          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>

          <p>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>

          <p>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>

          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <h6>Call & trade</h6>

          <p>
            Additional charges of ₹50 per order for orders placed through a
            dealer at TradeSync including auto square off orders.
          </p>

          <h6>Stamp charges</h6>

          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h6>NRI brokerage charges</h6>
          <ul>
            <li>
              For a non-PIS account, 0.5% or ₹50 per executed order for equity
              and F&O (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>

          <h6>Account with debit balance</h6>

          <p>
            Accounts with a debit balance will be charged an additional ₹20 per
            executed order.
          </p>
        </div>
        <div className="col pe-5 text-muted">
          <h6>GST</h6>

          <p>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>

          <h6>SEBI Charges</h6>

          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h6>DP (Depository participant) charges</h6>

          <p>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 TradeSync fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>

          <p>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>

          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <h6>Pledging charges</h6>

          <p>₹30 + GST per pledge request per ISIN.</p>

          <h6>AMC (Account maintenance charges)</h6>

          <p>
            Free for the first year on all new resident individual accounts.
          </p>

          <p>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA, Click here
          </p>

          <p>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC, Click here
          </p>

          <h6>Corporate action order charges</h6>

          <p>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>

          <h6>Off-market transfer charges</h6>

          <p>₹25 per transaction.</p>

          <h6>Physical CMR request</h6>

          <p>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Charges;
