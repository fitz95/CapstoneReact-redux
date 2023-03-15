import React from 'react';
import { useSelector } from 'react-redux';
import CoinDetailUi from './CoinDetailUi';
import '../css/coinlist.css';

function CoinDetail() {
  const coins = useSelector((store) => store.coinDetails.list);
  console.log(coins);
  return (
    <div className="coin-div">
      <div className="coinsheading">
        <h2>Crypto Market Prices</h2>
      </div>
      <div className="coinsdetaildiv">
        <CoinDetailUi
          name={coins.name}
          picture={coins.image.large}
          currentPrice={coins.market_data.current_price.usd}
          Alltimehigh={coins.market_data.ath.usd}
          Alltimelow={coins.market_data.atl.usd}
          fullydillutedvaluation={coins.market_data.fully_diluted_valuation.usd}
          marketcap={coins.market_data.market_cap.usd}
          pricechangepercentageyearly={coins.market_data.price_change_percentage_1y_in_currency.usd}
          totalvolume={coins.market_data.total_volume.usd}
        />
      </div>
    </div>
  );
}

export default CoinDetail;
