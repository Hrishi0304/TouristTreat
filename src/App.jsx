import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import './App.css';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header/>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 w-full">
          <div className="md:col-span-4">
            <List/>
          </div>
          <div className="md:col-span-8 flex justify-center items-center">
            <Map/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
