//import logo from './logo.svg';
import './App.css';
import Subscribers from './components/Subscribers.js';
import {Provider} from 'react-redux';
import store from './redux/store';
import Display from './components/Display';
import View from './components/View';
import Comments from './components/Comments';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers/>
        <Display/>
        <View/>
        <Comments />
      </div>
    </Provider>
  );
}

export default App;
