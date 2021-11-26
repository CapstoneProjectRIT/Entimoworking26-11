import React from 'react';
import Navbar from '../Dashboard/index';

const Home = () => (
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
      <h1>Home</h1>
    </div>
  </>
);

export default Home;
