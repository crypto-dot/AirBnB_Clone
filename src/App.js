import logo from './logo.svg';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/Data';


const dataArr = Data.map(dataObj => <Card {...dataObj}/>)

function App() {
  return (
  <> 
  <Nav/>
  <Hero/>
  <div className = 'cards'>
  {dataArr}
  </div>
  </>);
}

export default App;
