import videopainting1 from '../videos/videopainting1.mp4';
import videopainting2 from '../videos/videopainting2.mp4';
import videopainting3 from '../videos/videopainting3.mp4';
import videopainting4 from '../videos/videopainting4.mp4';
import './styles/VideoPlayer.css';

var ind = 1;
const videos = [videopainting1, videopainting2, videopainting3, videopainting4];
export function VideoPlayer(){
    return <video autoPlay muted onEnded={(ev) => {ev.currentTarget.src = videos[ind++]; if(ind >= 4) ind = 0;}}>
            <source src={videos[0]} type='video/mp4'/>
        </video>;
}