import React from 'react';
import Navbar from '../Dashboard/index';

const MyUpdates = () => (
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
      <h1>These are my Upadates.</h1>
    </div>
  </>
);

export default MyUpdates;
