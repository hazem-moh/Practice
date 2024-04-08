import "./App.css";

import { useState } from 'react';
function Item({ onAddToCart }) {
  const [isChoosed, setIsChoosed] = useState(false);

  const handleAddToCart = () => {
    setIsChoosed(!isChoosed);
    onAddToCart(isChoosed);
  };

  return (
    <div className='card p-32 bg-gray-200 relative rounded w-fit'>
      <p className='uppercase text-2xl font-bold'>product</p>
      <button className='p-2 bg-red-500 text-white absolute bottom-4 right-4 rounded-md cursor-pointer' onClick={handleAddToCart}>
        {isChoosed ? 'Remove product' : 'Add product'}
      </button>
      <span className='absolute top-4 right-4'>
        {isChoosed ? <div className='w-7 h-7 bg-green-500 rounded-full'></div> : <div className='w-7 h-7 bg-red-500 rounded-full'></div>}
      </span>
    </div>
  );
}

function App() {
  const [cartCount, setCartCount] = useState(0);
  const incrementCounter = (isChoosed) => {
    if (isChoosed) {
      setCartCount(cartCount + 1);
    } else {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="App mt-24">
      <div className="bg-gray-200 p-10 rounded-lg mb-7 text-center">
        <p className='text-xl'>You have {- cartCount} items in your cart</p>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <Item onAddToCart={incrementCounter} />
        <Item onAddToCart={incrementCounter} />
        <Item onAddToCart={incrementCounter} />
        <Item onAddToCart={incrementCounter} />
      </div>
    </div>
  );
}

export default App;
