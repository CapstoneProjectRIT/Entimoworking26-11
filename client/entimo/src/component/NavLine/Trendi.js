import React from 'react';
import Navbar from '../Dashboard/index';

const Trendi = () => (
  <>
    <Navbar />
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh',
      }}
    >
      <h1>These are Trending Tasks.</h1>
    </div>
  </>
);

export default Trendi;
