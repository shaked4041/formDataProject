import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'
import Edit from './components/Edit'
import { useEffect } from 'react';
import axios from 'axios';


export default function App() {

  return (
    <Router>
    <div>
         <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>
    </Router>
  )
}
