import './App.css';
import { Calendar as ScheduleCalendar } from './view/Calendar.js';
import { NavBar, NavBar as Navigation } from './view/NavBar.js';
import { VideoPlayer } from './view/VideoPlayer.js';
import { ReturnPortfolio as Portfolio } from './view/Home.js';
import {Gallery} from './view/Gallery.js';

window.onscroll = async function pageScroll() {
  if (window.scrollY > 100) {
    document.getElementById("portfolio-background").style.opacity = 0;
  }

  if (window.scrollY < 100) {
    document.getElementById("portfolio-background").style.opacity = 1;
  }
}

function App() {
  return (
    <div>
      <NavBar />
      <div id="videoplayer">
        <VideoPlayer />
      </div>
      <Portfolio />
      <Gallery />
    </div>
  );
}

export default App;
