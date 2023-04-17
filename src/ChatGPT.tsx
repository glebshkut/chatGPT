import { useSelector, useDispatch } from 'react-redux';
import { actions, storeState } from './store';
import Chat from "./Chat";



function App() {
  const screen = useSelector((state: storeState) => state.screen);
  const API = useSelector((state: storeState) => state.API);
  const dispatch = useDispatch();
  const { setAPI, switchScreen } = actions;

  return (
    screen === "initial" ?
      <div className="App">
        <div>Enter your API key:</div>
        <input
          id="api-input"
          type="text"
          value={API}
          onChange={(e) => {
            dispatch(setAPI(e.target.value));
          }}
        />
        <button onClick={() => dispatch(switchScreen("chat"))}>Done!</button>
      </div>
      : <Chat />
  );
}

export default App;
