import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Products from './components/Products';
import Records from './components/Records';
import Sales from './components/Sales';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/sales' element={<Sales/>} />
      <Route path='/records' element={<Records/>} />
    </Routes>
  );
}

export default App;
