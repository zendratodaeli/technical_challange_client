import { Route, Routes } from 'react-router-dom';
import './App.css';
import PhonePage from './page/PhonePage';
import PhonePageDetails from './page/PhonePageDetails';
import NavBarPage from './page/NavBarPage';
import HomePage from './page/HomePage';


function App() {
  return (
    <div className="App">
      <NavBarPage />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/phones' element={<PhonePage />}/>
        <Route path='/phones/:id' element={<PhonePageDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
