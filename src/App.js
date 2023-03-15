import './App.css';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Search from './components/Search.tsx';

function App() {
  return (
    <div aria-label="app" className="bg-black min-h-screen min-w-screen md:min-h-screen">
      <Header />
      <Hero />
      <Search />
    </div>
  );
}

export default App;
