import './Chat.scss';
import { useSelector, useDispatch } from "react-redux";
import { actions, storeState } from "./store";
import axios from 'axios';

async function fetchChatCompletion(prompt: {
  role: string;
  content: string;
}[], apiKey: string) {
  try {
    return await axios.post('http://127.0.0.1:5000/chat-completion', {
      prompt: prompt,
      apiKey: apiKey,
    });
  } catch (error) {
    console.error('Error:', error);
  }
}


export default function Chat() {
  const dispatch = useDispatch();
  const responses = useSelector((state: storeState) => state.responses);
  const request = useSelector((state: storeState) => state.request);
  const API = useSelector((state: storeState) => state.API) || import.meta.env.VITE_OPENAI_API_KEY;
  const { setRequest, setResponses, switchScreen } = actions;

  const handleRequest = () => {
    const res = [...responses];
    res.push({ "role": "user", "content": request });
    dispatch(setResponses({ "role": "user", "content": request }));
    fetchChatCompletion(res, API)
      .then((response) => {
        if (response) {
          dispatch(setResponses(response.data.result));
        } else {
          console.log("No response received");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <>
      <button className="auth-back" onClick={() => dispatch(switchScreen("initial"))} > Go back to Auth</button >
      <div id="chat">
        <div className="chat-box">
          {responses.map((res, index) => {
            return <div key={index}>
              {res.content}
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
          <button onClick={handleRequest}>Send</button>
        </div>
      </div>
    </>
  )
}