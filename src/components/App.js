import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<StreamList />} />
            <Route exact path="/streams/new" element={<StreamCreate />} />
            <Route exact path="/streams/edit" element={<StreamEdit />} />
            <Route exact path="/streams/delete" element={<StreamDelete />} />
            <Route exact path="/streams/show" element={<StreamShow />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
