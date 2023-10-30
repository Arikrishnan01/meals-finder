import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom'
import AddMeals from './Pages/AddMeals/AddMeals';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/meals/createMeals' element={<AddMeals />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
