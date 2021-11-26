import React from 'react';
import Navbar from '../Dashboard/index';

const Mytask = () => (
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
      <h1>This is My Task.</h1>
    </div>
  </>
);

export default Mytask;
