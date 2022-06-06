import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/projects' element={<Projects />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
