import React from 'react';
import PropTypes from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';
import '../css/coindetailui.css';

function CoinDetailUi({
  currentPrice,
  Alltimehigh,
  Alltimelow,
  fullydillutedvaluation,
  marketcap,
  pricechangepercentageyearly,
  totalvolume,
}) {
  return (
    <div className="coindetail">
      <div className="coindetaildiv">
        <h1 className="name">Current Price</h1>
        <div className="subcoindetaildiv">
          {currentPrice && (
          <h1 className="name">
            {currentPrice}
            $
          </h1>
          )}
          <BiRightArrowCircle className="icon" />
        </div>
      </div>
      <div className="coindetaildiv">
        <h1 className="name">All Time High</h1>
        <div className="subcoindetaildiv">
          {Alltimehigh && (
            <h1 className="name">{Alltimehigh}</h1>
          )}
          <BiRightArrowCircle className="icon" />
        </div>
      </div>
      <div className="coindetaildiv">
        <h1 className="name">All Time Low</h1>
        <div className="subcoindetaildiv">
          {Alltimelow && (
            <h1 className="name">{Alltimelow}</h1>
          )}
          <BiRightArrowCircle className="icon" />
        </div>
      </div>
      <div className="coindetaildiv">
        <h1 className="name">Fully Diluted Evaluation</h1>
        <div className="subcoindetaildiv">
          {fullydillutedvaluation && (
            <h1 className="name">{fullydillutedvaluation}</h1>
          )}
          <BiRightArrowCircle className="icon" />
        </div>
      </div>
      <div className="coindetaildiv">
        <h1 className="name">Market Cap</h1>
        <div className="subcoindetaildiv">
          {marketcap && (
            <h1 className="name">{marketcap}</h1>
          )}
          <BiRightArrowCircle className="icon" />
        </div>
      </div>
      <div className="coindetaildiv">
        <h1 className="name">Price Change Per Year</h1>
        <div className="subcoindetaildiv">
          {pricechangepercentageyearly && (
            <h1 className="name">{pricechangepercentageyearly}</h1>
          )}
          <BiRightArrowCircle className="icon" />
        </div>
      </div>
      <div className="coindetaildiv">
        <h1 className="name">Total Volume</h1>
        <div className="subcoindetaildiv">
          {totalvolume && (
            <h1 className="name">{totalvolume}</h1>
          )}
          <BiRightArrowCircle className="icon" />
        </div>
      </div>
    </div>
  );
}
CoinDetailUi.propTypes = {
  currentPrice: PropTypes.number.isRequired,
  Alltimehigh: PropTypes.number.isRequired,
  Alltimelow: PropTypes.number.isRequired,
  fullydillutedvaluation: PropTypes.number.isRequired,
  marketcap: PropTypes.number.isRequired,
  pricechangepercentageyearly: PropTypes.number.isRequired,
  totalvolume: PropTypes.number.isRequired,
};

export default CoinDetailUi;
