import Card from './card.jsx'
import kayflockImage from './assets/kayflock.jpg'
import leedrillyImage from './assets/leedrilly.jpg'
import dthangImage from './assets/dthang.jpg'
import shagzImage from './assets/shagz.jpg'

function App() {
  return (
  <div>
    <Card Image={kayflockImage} Name="KayFlock" Desc="New York Drill Rapper"/>
    <Card Image={leedrillyImage} Name="Lee Drilly" Desc="New York Drill Rapper"/>
    <Card Image={dthangImage} Name="Dthang" Desc="New York Drill Rapper"/>
    <Card Image ={shagzImage} Name="Shagz" Desc="New York Drill Rapper"/>
  </div>
  );
}

export default App
