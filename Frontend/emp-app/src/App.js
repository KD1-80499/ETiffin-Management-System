import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EmployeeList from './components/EmployeesList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path='/' element={< AddEmployee/>} />
            <Route path='/add' element={<EmployeeList />} />
            <Route path='/employees/edit/:id' element={<AddEmployee />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
