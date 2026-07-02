
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from '../pages/Home';
import { Legal } from '../pages/Legal/Legal';
import { cookieData, privacyData, termsData } from '../pages/Legal/data';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/privacy' element={<Legal data={privacyData}/>} />
      <Route path='/cookies' element={<Legal data={cookieData}/>} />
      <Route path='/terms' element={<Legal data={termsData}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
