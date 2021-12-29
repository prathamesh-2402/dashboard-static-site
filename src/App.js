import './App.css';
import 'antd/dist/antd.css';
import Skeleton from './components/Skeleton';
import HeadBar from './components/HeadBar';

const App = ()=> {
  return (
    <div className="App">
      <HeadBar/>
      <Skeleton/>
    </div>
  );
}

export default App;
