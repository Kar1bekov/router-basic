import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Everything from './pages/Everything';
import Photo from './pages/Photo';
import OurServices from './pages/Ourservices';



function App() {
  return (
    <div className="App">
      <Everything/>
      <Routes>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/photo' element={<Photo/>}/>
        <Route path="/services" element={<OurServices />} />
      </Routes>
    </div>
  );
}

export default App;
