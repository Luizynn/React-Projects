import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  const timerSetting = [
    {title: 'Easy', targetTime: 1},
    {title: 'Not Easy', targetTime: 5},
    {title: 'Getting tough', targetTime: 10},
    {title: 'Pros only', targetTime: 15},
  ]
  return (
    <>
      <Player />
      <div id="challenges">
        {timerSetting.map(({title, targetTime}) => <TimerChallenge title = {title} targetTime={targetTime}/>)}
      </div>
    </>
  );
}

export default App;
