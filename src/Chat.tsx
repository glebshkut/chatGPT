import './Chat.scss';
import { useSelector, useDispatch } from "react-redux";
import { actions, storeState } from "./store";
import { Configuration, OpenAIApi } from "openai";

export default function Chat() {
  const dispatch = useDispatch();
  const responses = useSelector((state: storeState) => state.responses);
  const request = useSelector((state: storeState) => state.request);
  const API = useSelector((state: storeState) => state.API) || import.meta.env.VITE_OPENAI_API_KEY;
  const { setRequest, setResponses, switchScreen } = actions;

  const configuration = new Configuration({
    apiKey: API,
  });

  const openai = new OpenAIApi(configuration);

  const getResponse = async () => {
    return await openai.createCompletion({
      model: "text-davinci-002",
      prompt: request,
      max_tokens: 100,
      temperature: 0,
    });
  };


  const handleRequest = () => {
    dispatch(setResponses(request));
    getResponse()
      .then((response) => {
        const data = response.data.choices[0].text;
        console.log(data);
        if (data && data.length > 0 && typeof data === "string") {
          dispatch(setResponses(data));
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
          <button onClick={handleRequest}>Send</button>
        </div>
      </div>
    </>
  )
}