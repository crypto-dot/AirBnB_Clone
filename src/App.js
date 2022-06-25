import logo from './logo.svg';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import Person from './person.png';
import MountainBike from './mountain-bike.png';
import WeddingPhoto from './wedding-photography.png';
function App() {
  return (
  <> 
  <Nav/>
  <Hero/>
  <div className = 'cards'>
  <Card
    img = {Person}
    rating = '5.0'
    reviewCount = {6}
    country = 'USA'
    title = 'Life Lessons With Katie Zafarie'
    price = {136}
  />
    <Card
    img = {WeddingPhoto}
    rating = '5.0'
    reviewCount = {30}
    country = 'USA'
    title = 'Learn Wedding Photography'
    price = {125}
  />
  <Card
    img = {MountainBike}
    rating = '4.8'
    reviewCount = {2}
    country = 'USA'
    title = 'Group Mountain Biking'
    price = {50}
  />
  </div>
  </>);
}

export default App;
