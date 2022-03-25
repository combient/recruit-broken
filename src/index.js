import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import SearchCountry from './pages/SearchCountry'
import Country from './pages/Country'
import Countries from './pages/Countries'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/search-country" element={<SearchCountry />} />
          <Route path="country">
            <Route path=":code" element={<Country />} />
          </Route>
          <Route path="/countries" element={<Countries />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
