import { Bar } from './components/Bar';
import kitchen from './images/kitchen.jpg';

function App() {
  return (
    <div className='app'>
      <img src={kitchen} className='app__img' width='100%' alt='kitchen'/>
      <img src={kitchen} className='app__img' width='100%' alt='kitchen'/>
      <img src={kitchen} className='app__img' width='100%' alt='kitchen'/>
      <Bar />
    </div>
  );
}

export default App;
