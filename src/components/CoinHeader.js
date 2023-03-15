import React from 'react';
import { useSelector } from 'react-redux';

function CoinHeader() {
  const coindetail = useSelector((store) => store.coinDetails.list);
  return (
    <div className="headerdiv">
      <img alt="cryptocurrencies" src={coindetail.image.large} className="imgheader" />
      <div className="subdiv">
        <h1 className="headerh1">{coindetail.name}</h1>
        <p className="headerh2">{coindetail.market_data.current_price.usd}</p>
      </div>
    </div>
  );
}

export default CoinHeader;
