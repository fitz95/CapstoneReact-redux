import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CoinDetail from 'src/components/CoinDetail';
import CoinHeader from 'src/components/CoinHeader';
import DetailNav from 'src/components/DetailNav';
import { fetchCoinDetails } from 'src/redux/coindetails/coinDetailsSlice';

function CoinDetails() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoinDetails('bitcoin'));
  });
  return (
    <>
      <DetailNav />
      <CoinHeader />
      <CoinDetail />
    </>
  );
}

export default CoinDetails;
