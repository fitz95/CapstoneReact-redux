import React from 'react';
import { useSelector } from 'react-redux';
import CoinUi from './CoinUi';
import '../css/coinlist.css';

function CoinList() {
  const coins = useSelector((store) => store.coins.list);
  return (
    <div className="coin-div">
      <div className="coinsheading">
        <h2>Crypto Market Prices</h2>
      </div>
      <div className="coinsdiv">
        {coins.map((coins) => (
          <CoinUi
            id={coins.id}
            key={coins.id}
            name={coins.name}
            picture={coins.image}
            currentPrice={coins.current_price}
          />
        ))}
      </div>
    </div>
  );
}

export default CoinList;
