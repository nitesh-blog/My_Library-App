import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import NoPage from './pages/NoPage';
import BooksList from './pages/BooksList';

// const getDatafrom =() =>{
//   const data = localStorage.getItem('books');
//   if(data)
//   {
//       return JSON.parse(data);

//   }

//   else{
//       return []
//   }
// }

export default function App()
{
  const data = localStorage.getItem('books');
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='booklist' element={<BooksList dataList = {data} />} />
        <Route path='*' element={<NoPage/>} />

      </Route>

    </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
