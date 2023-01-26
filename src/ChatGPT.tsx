import { useState } from 'react'
import './App.css';
import { Configuration, OpenAIApi } from "openai";

// const openai = new OpenAIApi(configuration);
// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "Say this is a test",
//   temperature: 0,
//   max_tokens: 7,
// });

function App() {
  const [count, setCount] = useState(0)
  // const configuration = new Configuration({
  //   apiKey: import.meta.env.VITE_Open_AI_Key,
  // });
  // const openai = new OpenAIApi(configuration);
  // const response = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Who is Elon Musk?",
  //   temperature: 0,
  //   max_tokens: 20,
  // });

  // console.log('response', response.data.choices[0]);


  return (
    <div className="App">
      Here
    </div>
  )
}

export default App
