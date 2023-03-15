// import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoins } from 'src/redux/coins/coinsSlice';
import { fetchCoinDetails } from 'src/redux/coindetails/coinDetailsSlice';
import CoinList from 'src/components/CoinList';
import Header from 'src/components/Header';
import Navbar from 'src/components/Navbar';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
    dispatch(fetchCoinDetails('bitcoin'));
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Header />
      <CoinList />
    </>
  );
}

export default Home;
