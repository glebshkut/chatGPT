import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ChatGPT from "./ChatGPT";
import DallE from "./DallE";
import Index from "./Index";
import Header from "./Header";

interface Props { }

const App: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dalle" element={<DallE />} />
        <Route path="/chatgpt" element={<ChatGPT />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
