import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchCoinDetails } from 'src/redux/coindetails/coinDetailsSlice';
import { BiRightArrowCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import '../css/coinui.css';

function CoinUi({
  name, picture, id, currentPrice,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchCoinDetails(id));
  };
  return (
    <div className="coindiv">
      <div className="coin">
        <NavLink to="/coindetails">
          <BiRightArrowCircle className="icon" onClick={handleClick} />
        </NavLink>
        <img alt="coin" src={picture} className="img" />
        <h1>{name}</h1>
        <h1 className="name">{id}</h1>
        <h1 className="name">{currentPrice}</h1>
      </div>
    </div>
  );
}
CoinUi.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default CoinUi;
