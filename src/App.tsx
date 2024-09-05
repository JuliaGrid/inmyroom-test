import { Bar } from './components/Bar';
import kitchen from './images/kitchen.jpg';

function App() {
  return (
    <div>
      <img src={kitchen} width='100%' alt='kitchen'/>
      <img src={kitchen} width='100%' alt='kitchen'/>
      <img src={kitchen} width='100%' alt='kitchen'/>
      <Bar />
    </div>
  );
}

export default App;
