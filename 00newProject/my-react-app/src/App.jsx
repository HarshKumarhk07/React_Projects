import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ReportMissing from './pages/ReportMissing';
import ViewPersons from './pages/ViewPersons';
import News from './pages/News';
import LocationInfo from './pages/LocationInfo';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="report" element={<ReportMissing />} />
          <Route path="persons" element={<ViewPersons />} />
          <Route path="news" element={<News />} />
          <Route path="location" element={<LocationInfo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;