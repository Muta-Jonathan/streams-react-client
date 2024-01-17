import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const PageOne = () => {
  return <div>Page One</div>;
};

const PageTwo = () => {
  return (
    <div>
      Page Two <br /> <button>Press here</button>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<PageOne />} />
          <Route exact path="/pageTwo" element={<PageTwo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
