import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import ProductReveal from './components/ProductReveal';
import Features from './components/Features';
import DeepDetail from './components/DeepDetail';
import Specifications from './components/Specifications';
import Pricing from './components/Pricing';
import Trust from './components/Trust';
import Gift from './components/Gift';
import FinalScroll from './components/FinalScroll';

function App() {
  return (
    <div className="bg-black text-white font-sans selection:bg-sky-900 antialiased w-full overflow-clip">
      <Hero />
      <Story />
      <ProductReveal />
      <Features />
      <DeepDetail />
      <Specifications />
      <Pricing />
      <Trust />
      <Gift />
      <FinalScroll />
    </div>
  );
}

export default App;
