import './Chat.scss';
import { useSelector, useDispatch } from "react-redux";
import { actions, storeState } from "./store";

export default function Chat() {
  const dispatch = useDispatch();
  const responses = useSelector((state: storeState) => state.responses);
  const request = useSelector((state: storeState) => state.request);
  const { setRequest, switchScreen } = actions;


  return (
    <>
      <button className="auth-back" onClick={() => dispatch(switchScreen("initial"))} > Go back to Auth</button >
      <div id="chat">
        <div className="chat-box">
          {responses.map((res, index) => {
            return <div key={index}>
              {res}
            </div>
          })}
        </div>
        <div className="input-box">
          <input
            type="text"
            onChange={(e) => {
              dispatch(setRequest(e.target.value));
            }}
            value={request}
            placeholder="Type your request here..." />
        </div>
      </div>
    </>
  )
}