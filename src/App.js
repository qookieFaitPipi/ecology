import React from "react";

// react-router-dom
import {Routes, Route} from 'react-router-dom';

// pages
import IndexPage from "./Pages/IndexPage/IndexPage";

function App() {
  return (
    <Routes>
      <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} index path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
