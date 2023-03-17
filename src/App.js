import './App.css';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';

import Footer from './components/Footer.tsx';
import ResultList from './components/ResultList';

function App() {


  return (
    <div
      aria-label="app"
      className="flex flex-col bg-black h-screen w-screen justify-between"
    >
      <Header />
      <Hero />
      <ResultList />
      <Footer />
    </div>
  );
}

export default App;
