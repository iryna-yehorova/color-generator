import './App.css';
import { Provider } from 'react-redux'
import { store } from './store/store'
import Board from './components/board'


function App() {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  );
}

export default App;
