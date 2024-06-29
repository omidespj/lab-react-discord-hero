import './App.css';

import logo from './assets/discord-logo-white.png'
import menuIcon from './assets/menu-icon.png'
import backGrndImg from './assets/discord-background.png'

function App() {
  return (
    <div className="App">
      <nav>
        <img src ={logo} className='dis-logo'/>
        <img src = {menuIcon} className='menuIcon'/>
      </nav>
      <h1>IMAGINE A PLACE...</h1>
      <p>...where you can belong to a school club, a gaming group, or a 
        worldwide art community. Where just you and a handful of 
        friends can spend time together. A place that makes it easy to
        talk every day and hang out more often.
      </p>
      <div className='btns'>
        <button type='button' className='macBtn'>Download for mac</button>
        <button type='button' className='discordBtn'>Open discord in your browser</button>
      </div>
      <img src = {backGrndImg} className='backGrndImg'/>
    </div>
  );
}

export default App;