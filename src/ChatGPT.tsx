import { useSelector, useDispatch } from 'react-redux';
import { setAPI } from './store';

interface storeState {
  value: number;
  apiProvided: boolean;
  API: string;
  screen: string;
}

function App() {
  const apiValue = useSelector((state: storeState) => state.API);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>API: {apiValue}</div>
      <input
        id="api-input"
        type="text"
        onChange={(e) => {
          dispatch(setAPI(e.target.value));
        }}
      />
    </div>
  );
}

export default App;
