import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import AuthorList from "./components/AuthorList/AuthorList";
import AuthorDetails from "./components/AuthorDetails/AuthorDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "/" element = {<AuthorList />} />
          <Route path = "/author/:id" element = {<AuthorDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

