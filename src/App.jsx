import './stylesheets/app.css';
import Card from './card';
import Wallpaper from './assets/Wallpaper.jpg'
function App() {
  return (
    <div className="App">
      <div className='fondo'>
        <img src={Wallpaper}/>
      </div>
      <Card/>
    </div>
  )
}

export default App
