import React from 'react';
import Shelf from '../Shelf/Shelf.js';
import Filter from '../Filter/Filter.js';
import FloatCart from '../FloatCart/FloatCart.js';

const App = () => {
  return <>
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </>
}

export default App;
